class Api::UsersController < ApplicationController
  before_action :set_user, only: [:update]
  
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 422
    end
  end
  
  private

  def set_user
    @user = current_user
  end

  def user_params
    params.require(:user).permit(:name, :nickname, :email, :image, :is_admin, :is_staff, :is_student, :is_alumni, :is_guest)
  end
  
end
