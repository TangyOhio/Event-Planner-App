50.times do
  title = Faker::Name.title
  category = Faker::Commerce.department
  description = Faker::Company.catch_phrase
  date = Faker::Date.between(7.days.ago, Date.today)
  start_time = "#{rand 4..6}pm"
  end_time = "#{rand 7..9}pm"
  private = false
  event_image = Faker::Placeholdit.image("100x100")
  xp = rand(10..100)
  user_id = 1
  Event.create(title: title, category: category, description: description, date: date, start_time: start_time, end_time: end_time, private: private, event_image: event_image, xp: xp, user_id: user_id )
end

User.create(
  email: "test@test.com",
  password: "password"
)

puts 'done seeded'
