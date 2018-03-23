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
x
  def update
    if @event.update(event_params)
      redirect_to event_path(@event)
    else
      render :edit
    end
  end
end
