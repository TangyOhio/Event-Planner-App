class Api::RsvpsController < ApplicationController
  before_action :set_rsvp, only: [:destroy]
  
  def index
    render json: Rsvp.all
  end

  def create
    rsvp = Rsvp.new(rsvp_params)
    if rsvp.save
      render json: rsvp
    end
  end

  def destroy
    @rsvp.destroy
  end


  private
  def rsvp_params
     params.require(:rsvp).permit(:user_id, :event_id)
  end
 
  def set_rsvp
     @rsvp = Rsvp.find(params[:id])
  end

end