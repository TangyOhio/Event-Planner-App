class Api::EventsController < ApplicationController
  def index
    @events = Events.all
  end

  def show
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to event_path(@event)
    else
      render :new
    end
  end

  def update
    if @event.update(event_params)
      redirect_to event_path(@event)
    else
      render :edit
    end
  end

  private
    def event_routes
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:title, :category, :description, :date, start_time:, end_time:, private:, event_image:)
    end
  end

end
