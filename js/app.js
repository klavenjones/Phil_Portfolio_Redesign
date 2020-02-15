    
    let sidebarTrigger = $('.nav-trigger');
    let sidebar = $('.side-nav');
    let $animation_elements = $('.image-container');
    let $window = $(window);
    
    //mobile only - open sidebar when user clicks the hamburger menu
	sidebarTrigger.on('click', function(event){
		event.preventDefault();
        //Side bar toggle
        $(sidebar).toggleClass('side-nav-visible');
        $(this).toggleClass('open');
    });

