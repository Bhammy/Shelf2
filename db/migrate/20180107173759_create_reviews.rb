class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :book_id, null: false
      t.integer :user_id, null: false
      t.float :rating
      t.string :title
      t.text :body

      t.timestamps
    end
    add_index :reviews, :book_id
    add_index :reviews, :user_id
  end
end
