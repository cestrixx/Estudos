require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'openssl'
require 'jwt'
require 'json'

######
# first we load up the private and public keys that we will use to sign and verify our JWT token
# using RS256 algo
######

signing_key_path = File.expand_path("../app.rsa", __FILE__)
verify_key_path = File.expand_path("../app.rsa.pub", __FILE__)

signing_key = ""
verify_key = ""

File.open(signing_key_path) do |file|
  signing_key = OpenSSL::PKey.read(file)
end

File.open(verify_key_path) do |file|
  verify_key = OpenSSL::PKey.read(file)
end

set :signing_key, signing_key
set :verify_key, verify_key

helpers do
  @error_message = nil

  def extract_token
    if env['HTTP_AUTHORIZATION']
      token = env['HTTP_AUTHORIZATION'].split().last
      return token
    end

    return nil
  end

  def authorized?
    @token = extract_token
    
    if @token.nil?
      return false
    end
    
    begin
      payload, header = JWT.decode(@token, settings.verify_key, true)
      
      @exp = header["exp"]

      if @exp.nil?
        @error_message = "Access token doesn't have exp set"
        return false
      end

      @exp = Time.at(@exp.to_i)

      if Time.now > @exp
        @error_message = "Access token expired"
        return false
      end

      @user_id = payload["user_id"]

    rescue JWT::DecodeError => e
      return false
    end
  end
end

get '/' do
  unless authorized?
    content_type :json
    return { :message => "Login first, please! This area is protected! #{@error_message}" }.to_json
  end
  
  {:message => "You are welcome!!! :D" }.to_json
end

post '/login' do
  content_type :json
  request.body.rewind
  @request_payload = JSON.parse request.body.read

  if @request_payload["username"] == "username" && @request_payload["password"] == "password"
    headers = {
      exp: Time.now.to_i + 60 #expire in 60 seconds
    }

    @token = JWT.encode({user_id: 123456}, settings.signing_key, "RS256", headers)
    
    response.headers['Authorization'] = "Bearer #{@token}"

    { :authorization_bearer => @token }.to_json
  else
    { :message => "Username/Password failed." }.to_json
  end
end