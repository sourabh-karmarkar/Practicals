class Event < ApplicationRecord
  validates_presence_of :title
  has_many :users, dependent: :destroy
end
