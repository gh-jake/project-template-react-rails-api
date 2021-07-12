class BeachesController < ApplicationController
    before_action :authorize

    def index
        user = User.find_by(id: session[:user_id])
        beaches = user.beaches
        render json: beaches
    end

    def show
        user = User.find_by(id: session[:user_id])
        beach = user.beaches.find_by(id: params[:id])
        if beach
            render json: beach
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        beach = user.beaches.create(beach_params)
        render json: beach
    end

    def update
        user = User.find_by(id: session[:user_id])
        beach = user.beaches.find_by(id: params[:id])
        beach.update(beach_params)
        render json: beach
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        beach = user.beaches.find_by(id: params[:id])
        beach.destroy
        head :no_content
    end

    private

    def beach_params
        params.permit(:name, :town, :dog_friendly, :has_snack_bar, :has_restrooms)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
