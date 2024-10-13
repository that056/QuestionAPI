class Question {
    constructor(number,category ,title, options) {
      this.number = number;
      this.category = category
      this.title = title;
      this.options = options;
    }
  }


const data =[
    // Personal Questions
    new Question(1, 'Personal', 'What activities do you find yourself naturally drawn to?', 
        [
            "Creative pursuits (art, music, writing)",
            "Helping others (social work, healthcare)",
            "Problem-solving (engineering, technology)",
            "Outdoor activities (environment, conservation)"
        ]
    ),
    new Question(2, 'Personal', 'What kind of challenges do you enjoy tackling?', 
        [
            "Complex problems",
            "Creative challenges",
            "Helping others",
            "Learning new things"
        ]
    ),
    new Question(3, 'Personal', 'When do you feel most satisfied or fulfilled?', 
        [
            "Helping others",
            "Achieving goals",
            "Learning new things",
            "Creating something new"
        ]
    ),
    new Question(4, 'Personal', 'What kind of impact do you want to make on the world?', 
        [
            "Help people and improve lives",
            "Solve problems and innovate",
            "Protect the environment",
            "Advance social justice"
        ]
    ),
    new Question(5, 'Personal', 'What are your strengths and weaknesses?', 
        [
            "Analytical thinking",
            "Creativity",
            "Communication skills",
            "Leadership"
        ]
    ),
    new Question(6, 'Personal', 'What kind of lifestyle do you want to have?', 
        [
            "High-paying job with long hours",
            "Flexible schedule with work-life balance",
            "Travel-oriented career",
            "Stable and secure job"
        ]
    ),
    new Question(7, 'Personal', 'What are your values and beliefs?', 
        [
            "Making a positive impact on the world",
            "Financial stability",
            "Work-life balance",
            "Continuous learning and growth"
        ]
    ),
    new Question(8, 'Personal', 'What drives your motivation in life?', 
        [
            "Personal growth",
            "Helping others",
            "Financial success",
            "Achieving balance"
        ]
    ),
    new Question(9, 'Personal', 'How do you handle stress or pressure?', 
        [
            "Problem-solving and staying calm",
            "Seeking creative outlets",
            "Talking with others for support",
            "Taking time for self-care"
        ]
    ),
    new Question(10, 'Personal', 'What work environment do you thrive in?', 
        [
            "Collaborative teams",
            "Autonomous and independent work",
            "Dynamic and fast-paced settings",
            "Structured and organized environments"
        ]
    ),
    new Question(11, 'Personal', 'What role do you naturally take on in group situations?', 
        [
            "Leader",
            "Supporter",
            "Innovator",
            "Mediator"
        ]
    ),
    new Question(12, 'Personal', 'How do you define success?', 
        [
            "Achieving career goals",
            "Making a positive impact",
            "Having a work-life balance",
            "Gaining financial independence"
        ]
    ),
    
    // Hobbies Questions
    new Question(1, 'Hobbies', 'What are you naturally curious about?', 
        [
            "People and society",
            "The natural world",
            "Technology and innovation",
            "Creative expression"
        ]
    ),
    new Question(2, 'Hobbies', 'When do you feel most energized and motivated?', 
        [
            "Helping others",
            "Achieving goals",
            "Learning new things",
            "Creating something new"
        ]
    ),
    new Question(3, 'Hobbies', 'What kind of problems or issues do you care deeply about?', 
        [
            "Social justice and equality",
            "Environmental protection",
            "Healthcare and public health",
            "Education and learning",
            "Economic development"
        ]
    ),
    new Question(4, 'Hobbies', 'What kind of skills or talents do you have that you enjoy using?', 
        [
            "Analytical thinking",
            "Creativity",
            "Communication skills",
            "Leadership",
            "Technical skills"
        ]
    ),
    new Question(5, 'Hobbies', 'How do you spend your free time?', 
        [
            "Engaging in creative activities",
            "Volunteering or helping others",
            "Exploring nature or outdoor activities",
            "Learning new skills"
        ]
    ),
    new Question(6, 'Hobbies', 'What kinds of activities make you lose track of time?', 
        [
            "Creative projects",
            "Researching new topics",
            "Collaborating with others",
            "Solving challenging problems"
        ]
    ),
    new Question(7, 'Hobbies', 'If you could choose one hobby to pursue for the rest of your life, what would it be?', 
        [
            "Artistic or creative work",
            "Outdoor adventures",
            "Building or creating things",
            "Studying human behavior"
        ]
    ),
    new Question(8, 'Hobbies', 'What inspires you the most?', 
        [
            "Innovative ideas",
            "Stories of people helping others",
            "Artistic expression",
            "Nature and the environment"
        ]
    ),
    new Question(9, 'Hobbies', 'What challenges do you enjoy facing in your free time?', 
        [
            "Solving puzzles or problems",
            "Creating something new",
            "Helping others",
            "Learning about new topics"
        ]
    ),
    
    // Skills Questions
    new Question(1, 'Skills', 'What type of work do you feel confident in?', 
        [
            "Analyzing data or solving complex problems",
            "Communicating with others effectively",
            "Creating or designing new ideas",
            "Leading and managing teams"
        ]
    ),
    new Question(2, 'Skills', 'How do you prefer to learn new skills?', 
        [
            "Through hands-on experience",
            "By reading and studying",
            "Working with mentors or experts",
            "Experimenting and trying new things"
        ]
    ),
    new Question(3, 'Skills', 'What do you consider your biggest achievement?', 
        [
            "Completing a challenging project",
            "Helping others in a meaningful way",
            "Learning something new and complex",
            "Overcoming a personal challenge"
        ]
    ),
    new Question(4, 'Skills', 'What skills do you want to develop further?', 
        [
            "Technical skills (coding, data analysis)",
            "Leadership and management",
            "Creative abilities",
            "Communication and networking"
        ]
    ),
    new Question(5, 'Skills', 'What types of tasks do you find yourself avoiding?', 
        [
            "Monotonous or repetitive work",
            "Tasks requiring intense focus",
            "Group projects or team collaboration",
            "Work that involves strict rules or procedures"
        ]
    ),
    
    // Future Goals Questions
    new Question(1, 'Future_Goals', 'Where do you see yourself in five years?', 
        [
            "Leading a team or project",
            "Continuously learning and growing",
            "Running my own business",
            "Helping people or making a difference"
        ]
    ),
    new Question(2, 'Future_Goals', 'What type of career would make you feel the most fulfilled?', 
        [
            "A career that challenges me intellectually",
            "A career where I can help others",
            "A creative and dynamic career",
            "A stable and secure career"
        ]
    ),
    new Question(3, 'Future_Goals', 'What kind of legacy do you want to leave behind?', 
        [
            "Innovative ideas or creations",
            "Positive impact on others",
            "A successful and fulfilling career",
            "Meaningful contributions to society"
        ]
    ),
    new Question(4, 'Future_Goals', 'What motivates you to work hard toward your goals?', 
        [
            "Desire for success and achievement",
            "Making a difference in the world",
            "Pursuing a passion",
            "Achieving financial security"
        ]
    ),
    new Question(5, 'Future_Goals', 'What kind of work-life balance do you envision for yourself?', 
        [
            "Working hard for financial success",
            "Balanced schedule with time for hobbies",
            "Flexible career that allows travel",
            "Stable routine with security and structure"
        ]
    )
]

module.exports =data
