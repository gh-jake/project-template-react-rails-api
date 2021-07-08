class BeachesController < ApplicationController
    def index
        user = User.find_by(session[:user_id])
        if user
            commands = user.commands
        end
    end
end
