class RemoveTitleFromSentences < ActiveRecord::Migration[6.1]
  def change
    remove_column :sentences, :title, :string
  end
end
