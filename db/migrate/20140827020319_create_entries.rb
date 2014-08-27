class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :content
      t.string :title
      t.string :author
      t.string :avatar
      t.timestamps
    end
  end
end
