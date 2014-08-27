class EntriesController < ApplicationController

  def index
    render json: Entry.all, status: 200
  end

  def create
    @entry = Entry.new(entry_params)
    render json: @entry.to_json, status: 200 if @entry.save
  end

  def destroy
    render json: @entry.to_json if @entry.destroy
  end

  private
  def entry_params
    params.require(:entry).permit(:author, :content, :avatar)
  end

end
