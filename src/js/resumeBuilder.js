//Defining Objects

var bio = {
    name: 'Afzal Syed',
    role: 'Sr. Software Engineer',
    contacts: {
        email: 'afzal@afzalsyed.com',
        mobile: '123-456-7890',
        twitter: '@afzalsyed',
        github: 'https://github.com/afzal273',
        location: 'San Jose, CA',
        blog: 'afzalsyed.com'
    },
    biopic: 'images/fry.jpg',
    welcomeMessage: 'Where there is a will there is a way!',
    skills: ['HTML/CSS', 'JavaScript', 'jQuery', 'Python', 'Ruby', 'Java', 'PHP', 'Perl', 'Objective-C', 'Swift'],
    display: function() {


        $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', this.name));

        $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
        $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.contacts.email));
        $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
        $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
        $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.contacts.location));


        $('#header').append(HTMLWelcomeMsg.replace('%data%', this.welcomeMessage));
        $('#header').append(HTMLbioPic.replace('%data%', this.biopic));

        if (this.skills) {
            $('#header').append(HTMLskillsStart);
            var formattedSkill;
            $.each(bio.skills, function(_, skill) {
                $('#skills').append(HTMLskills.replace('%data%', skill));
            });

        }

    }
};

var work = {
    jobs: [{
            employer: 'abcDef',
            title: 'Sr. Software Engineer',
            dates: 'July 2015 - Present',
            location: 'San Mateo, CA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt dolorem ea eligendi eos est exercitationem fuga id magnam maiores minima nobis, nostrum pariatur perspiciatis praesentium recusandae rerum, sunt suscipit. Accusamus architecto cumque doloremque esse in itaque maxime molestiae obcaecati provident, quis repellat sed tempora unde. Assumenda commodi consequuntur est necessitatibus nostrum pariatur possimus rerum tempora voluptate! Dignissimos distinctio dolorum ea eius ex facere id impedit magnam, modi nostrum provident quasi repellat reprehenderit similique velit veniam vero vitae! Dolores eveniet explicabo hic iusto, nisi quidem sapiente soluta! Ab accusamus adipisci aliquid, animi deleniti ducimus ea error est ex explicabo fuga fugit illo maiores nihil obcaecati placeat tempora ut veniam voluptates voluptatibus. A accusantium adipisci at autem blanditiis commodi corporis deleniti dignissimos doloremque doloribus enim esse ex fugiat hic, id iste laborum laudantium magnam modi non obcaecati odit officia officiis, quia quidem quis, quos ratione recusandae similique suscipit totam voluptatem voluptates.'
        }, {
            title: 'Sr. DevOps Engineer',
            employer: 'Hij Klmno',
            dates: 'Mar 2015 - July 2015',
            location: 'Sunnyvale, CA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores dolorem eaque earum eos esse excepturi facere, laborum libero necessitatibus omnis porro, praesentium quis repellat saepe sed tenetur velit veritatis vitae voluptatem. Accusantium ad aliquid animi aperiam at atque consectetur consequatur cum cupiditate delectus dicta dolor dolore dolores doloribus enim eos est, eum excepturi facilis harum in ipsa ipsum iusto laborum maxime molestias mollitia neque nesciunt quibusdam quo quos ratione rem reprehenderit repudiandae, saepe similique sit. Ad aut consequatur consequuntur dolorem doloremque eos et eum, eveniet explicabo hic, id laborum minus molestias nemo non nostrum odio quia quis quo quos rem saepe temporibus veniam vitae voluptate. Ab accusantium, dicta dignissimos dolores error et explicabo facilis harum hic iste laborum mollitia non quaerat, quia reprehenderit saepe sit suscipit tempora totam ullam. Accusamus alias aperiam corporis dicta ducimus, maxime natus quasi rerum veniam. Accusamus doloribus ea impedit necessitatibus provident quibusdam sapiente tenetur.'
        }, {
            title: 'Software Developer',
            employer: 'Hij Klmno',
            dates: 'May 2014 - Mar 2015',
            location: 'Sunnyvale, CA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur eos explicabo id impedit saepe sapiente. Aliquam consequuntur corporis deleniti est eveniet facilis iste nobis, officiis quo. Ab accusantium assumenda dolore ducimus earum excepturi expedita explicabo, hic laboriosam laudantium minima minus nisi non nostrum numquam quis quisquam repudiandae sint sunt tenetur. Culpa delectus deleniti, distinctio eum illo non sequi? Eligendi id illum impedit laboriosam magnam necessitatibus placeat porro praesentium, provident quaerat quis ratione saepe suscipit totam ullam velit voluptatibus. Accusamus accusantium asperiores aut beatae, corporis cupiditate delectus dicta distinctio doloribus ducimus ea earum eius enim eos esse eum explicabo illo illum iste iure iusto magni nam nulla odit optio porro quae quas quos reprehenderit repudiandae saepe sed, sint sunt tempora velit voluptatem voluptates. Ad aliquid assumenda culpa dolore eligendi enim esse et harum, magni minus obcaecati porro quod repudiandae sed similique velit voluptas voluptatem! Earum eius excepturi tempora ut veniam!'
        }

    ],
    display: function() {
        if (this.jobs) {
            $('#workExperience').append(HTMLworkStart);
            $.each(this.jobs, function(_, job) {
                $('.work-entry:last-child').append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
                $('.work-entry:last-child').append(HTMLworkDates.replace('%data%', job.dates));
                $('.work-entry:last-child').append(HTMLworkLocation.replace('%data%', job.location));
                $('.work-entry:last-child').append(HTMLworkDescription.replace('%data%', job.description));
            });

        }

    }

};

var education = {
    schools: [{
        name: 'University of Kansas',
        location: 'Lawrence, KS',
        degree: 'Masters',
        majors: ['Electrical Engineering', 'Computer Engineering'],
        dates: '2005-2007',
        url: 'www.ku.edu'


    }, {
        name: 'Jawaharlal Nehru Technological University',
        location: 'Hyderabad, India',
        degree: 'BS',
        majors: ['Electronics and Communications Engineering'],
        dates: '2001-2005',
        url: 'http://www.jntuh.ac.in'
    }],
    onlineCourses: [{
        title: 'Intro to HTML/CSS',
        school: 'Udacity',
        date: '2015',
        url: 'www.udacity.com'
    }, {
        title: 'Intro to JavaScript',
        school: 'Udacity',
        date: '2016',
        url: 'www.udacity.com'
    }, {
        title: 'Intro to Jquery',
        school: 'Udacity',
        date: '2016',
        url: 'www.udacity.com'
    }],
    display: function() {
        if (this.schools) {
            $('#education').append(HTMLschoolStart);
            $.each(this.schools, function(_, school) {
                $('.education-entry:last-child').append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));
                $('.education-entry:last-child').append(HTMLschoolDates.replace('%data%', school.dates));
                $('.education-entry:last-child').append(HTMLschoolLocation.replace('%data%', school.location));
                $('.education-entry:last-child').append(HTMLschoolMajor.replace('%data%', school.majors.join(', ')));
            });
        }

        if (this.onlineCourses) {
            $('.education-entry:last-child').append(HTMLonlineClasses);
            $.each(this.onlineCourses, function(_, course) {
                $('.education-entry:last-child').append(HTMLonlineTitle.replace('%data%', course.title) + HTMLonlineSchool.replace('%data%', course.school));
                $('.education-entry:last-child').append(HTMLonlineDates.replace('%data%', course.date));
                $('.education-entry:last-child').append(HTMLonlineURL.replace('%data%', course.url));
            });
        }

    }
};

var projects = {
    projects: [{
            title: 'Kiva ioS App',
            dates: '2015',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum eius excepturi officiis optio repudiandae similique ullam. Atque ea perferendis perspiciatis repellendus ut. Architecto blanditiis commodi, cupiditate explicabo facilis fugiat fugit itaque, libero nemo nulla perspiciatis suscipit tenetur veritatis! Architecto consequatur laborum minima officiis porro ratione rerum sint sit temporibus!',
            images: ['images/boat-featured-200x150_small.jpg', 'images/flowers-featured-200x150_small.jpg']
        }, {
            title: 'Coreloop - Social Shopping',
            dates: '2014',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate deserunt dignissimos ducimus eveniet libero magni minima, nemo optio placeat repellat repellendus reprehenderit, voluptate. Asperiores atque blanditiis cumque, esse explicabo itaque natus officiis perspiciatis placeat quo ratione saepe voluptatibus! Accusantium autem eaque earum nisi praesentium sint, soluta temporibus! Nisi, vero.',
            images: ['images/peacock-featured-200x150_small.jpg', 'images/boat-featured-200x150_small.jpg']
        }, {
            title: 'Vizualiser - Online Dashboards',
            dates: '2014',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur dignissimos dolore enim est fugiat fugit impedit ipsam nam, nemo nostrum obcaecati officiis perspiciatis quia sint temporibus ut vel voluptate? Asperiores autem consequatur et fugiat illo itaque nam porro quidem quis tenetur! Cupiditate fugit nam nemo saepe sit, unde voluptas.',
            images: ['images/flowers-featured-200x150_small.jpg', 'images/peacock-featured-200x150_small.jpg']
        }

    ],
    display: function() {
        if (this.projects) {
            $('#projects').append(HTMLprojectStart);
            $.each(this.projects, function(_, project) {
                $('.project-entry:last-child').append(HTMLprojectTitle.replace('%data%', project.title));
                $('.project-entry:last-child').append(HTMLprojectDates.replace('%data%', project.dates));
                $('.project-entry:last-child').append(HTMLprojectDescription.replace('%data%', project.description));
                //get all images
                if (this.images) {
                    var imageData = '';
                    $.each(this.images, function(_, image) {
                        imageData += HTMLprojectImage.replace('%data%', image);
                    });
                    $('.project-entry:last-child').append(imageData);
                }

            });
        }
    }

};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
