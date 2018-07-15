class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    render json: Event.order(date: :asc)
  end

  def show
    render json: @event
  end


  def create
    event = Event.new(event_params)

    if event.save
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: 422
    end
  end

  def destroy
    @event.destroy
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:title, :category, :description, :date, :start_time, :end_time , :private , :event_image, :user_id)
    end
end
