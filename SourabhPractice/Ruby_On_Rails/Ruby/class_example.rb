class Student
  @@no_of_students = 0
  attr_accessor :name, :age, :marks

  def initialize
    @@no_of_students += 1
  end

  def user_input
    print "Enter Name : "
    @name = gets.chomp
    print "Enter Age : "
    @age = gets.chomp.to_i()
    print "Enter Marks (separated by comma): "
    @marks = gets
    @marks = @marks.split(",").map{|num| num.to_i}
  end

  def display_info
    puts "Number of students is : #{@@no_of_students}"
    puts "Name : #{@name}\nAge : #{@age}\nMarks : #{@marks}"
    # puts "Percentage is : #{@marks.average}"
  end

  def avg
    puts "Average Marks are : #{@marks.sum / @marks.length}"
  end

  def percentage
    puts "Percentage is : #{((@marks.sum.to_f() / (@marks.length*100).to_f()) * 100)}%"
  end
end

print "Enter Number of students : "
num = gets.to_i()
(1..num).to_a.each do |i|
    student = Student.new
    student.user_input
    student.display_info
    student.avg
    student.percentage
    puts
end