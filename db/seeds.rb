50.times do
  title = Faker::Name.title
  category = Faker::Commerce.department
  description = Faker::Lovecraft.paragraph
  date = Faker::Time.between(DateTime.now - 1, DateTime.now)
  start_time =Faker::Time.between(30.days.ago, 14.days.ago, :all)
  end_time = Faker::Time.between(14.days.ago, Date.today, :all)
  private = false
  event_image = Faker::Placeholdit.image("100x100")
  Event.create(title: title, category: category, description: description, date: date, start_time: start_time, end_time: end_time, private: private, event_image: event_image )
end

User.create(
  email: "test@test.com",
  password: "password"
)

puts 'done seeded'
