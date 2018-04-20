class Event < ApplicationRecord
  has_many :rsvps, dependent: :destroy
  has_many :users, through: :rsvps
end
