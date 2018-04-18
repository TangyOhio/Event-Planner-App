class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :category
      t.string :description
      t.date :date
      t.string :start_time
      t.string :end_time
      t.boolean :private
      t.string :event_image
      t.integer :xp

      t.timestamps
    end
  end
end
