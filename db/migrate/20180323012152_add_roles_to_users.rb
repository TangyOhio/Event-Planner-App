class AddRolesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :is_admin, :boolean
    add_column :users, :is_student, :boolean
    add_column :users, :is_alumni, :boolean
    add_column :users, :is_guest, :boolean
    add_column :users, :is_staff, :boolean
  end
end
