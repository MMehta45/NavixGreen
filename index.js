<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Home | Navix</title>
        <link rel="icon" type="image/png" href="imgs/navixlogo.png">
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="css/general-style.css">
        <link rel="stylesheet" href="css/index-style.css">
    </head>
    <body class="dark-theme">             
        <div class="scroll-indicator">
            <div class="scroll-progress"></div>
        </div>  
        <a name="top"></a>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top main_pagetop_navbar_background">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="img/logo.png" class="d-inline-block" id="logo">
                    <img src="img/NavixInWhite.png" class="d-inline-block" id="name">
                </a>
                <div class="d-none d-lg-block toggle-container" style="position: relative; top: 3.5px;">
                    <div class="toggle">
                        <input type="checkbox" id="toggle-switch">
                        <label for="toggle-switch"></label>
                    </div>
                    <span class="toggle-text"></span>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-lg-none toggle-container" style="position: absolute; top: 10px; right: 70px">
                    <div class="toggle">
                        <input type="checkbox" id="toggle-switch">
                        <label for="toggle-switch"></label>
                    </div>
                    <span class="toggle-text"></span>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" id="seperator">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown" id="seperator">
                            <a class="nav-link dropdown-toggle" href="tours/main.html" id="toursandpricing" aria-haspopup="true" aria-expanded="false">
                                Tours &amp; Pricing
                            </a>
                            <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="toursandpricing">
                                <a class="dropdown-item text-white-50" href="tours/tour1.html">The Around the World Tour&#8482;</a>
                                <a class="dropdown-item text-white-50" href="tours/tour2.html">The Pinnacle Tour&#8482;</a>
                                <a class="dropdown-item text-white-50" href="tours/tour3.html">The ISS Tour&#8482;</a>
                            </div>
                        </li>
                        <li class="nav-item" id="seperator">
                            <a class="nav-link" href="spaceflight.html">Spaceflight</a>
                        </li>
                        <li class="nav-item" id="seperator">
                            <a class="nav-link" href="launches.html">Launches</a>
                        </li>
                        <li class="nav-item" id="seperator">
                            <a class="nav-link" href="training.html">Training</a>
                        </li>
                        <li class="nav-item" id="seperator">
                            <a class="nav-link" href="about.html" tabindex="-1">About</a>
                        </li>
                        <li class="nav-item last" id="navbar_register">
                            <a class="btn d-none d-lg-block" href="accounts/signup.html">Register</a>
                            <a class="nav-link d-lg-none" href="accounts/signup.html">Register</a>
                        </li>
                        <li class="nav-item last" id="navbar_login">
                            <a class="btn d-none d-lg-block" href="accounts/login.html" tabindex="-1">Login</a>
                            <a class="nav-link d-lg-none" href="accounts/login.html" tabindex="-1">Login</a>
                        </li>
                        <li class="nav-item last" id="navbar_dashboard">
                            <a class="btn d-none d-lg-block" href="accounts/dashboard.html" tabindex="-1">Dashboard</a>
                            <a class="nav-link d-lg-none" href="accounts/dashboard.html" tabindex="-1">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="indexcarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#indexcarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#indexcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#indexcarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/rocket_launch4.jpeg" class="d-block h-100 carousel_image">
                    <div class="carousel-caption align-middle" id="carouselslide">
                        <h1 class="display-3 d-md-block d-none">The unknown awaits.</h1>
                        <h1 class="d-md-none d-block">The unknown awaits.</h1>
                        <p class="lead d-none d-sm-block fw-semibold">For the first time, space is finally within reach.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/starry_sky.jpeg" class="d-block h-100 carousel_image">
                    <div class="carousel-caption align-middle" id="carouselslide">
                        <h1 class="display-3 d-md-block d-none">Reach for the stars.</h1>
                        <h1 class="d-md-none d-block">Reach for the stars.</h1>
                        <p class="lead d-none d-sm-block fw-semibold">Our tours help you realize the heights of human ingenuity.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/earth_from_space1.jpeg" class="d-block h-100 carousel_image">
                    <div class="carousel-caption align-middle" id="carouselslide">
                        <h1 class="display-3 d-md-block d-none">Take it all in.</h1>
                        <h1 class="d-md-none d-block">Take it all in.</h1>
                        <h4 class="d-none d-sm-block">[Taken by a guest on Challenger 5]</h4>
                        <p class="lead d-none d-sm-block fw-semibold">Appreciate the scale of human civilization.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#indexcarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#indexcarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container align-items-center">
            <figure class="text-center mx-0" id="quote">
                <blockquote id="quote_text">
                    That's one small <br class="d-md-none d-block">step for man, one <br class="d-md-none d-block">giant leap for mankind.
                </blockquote>
                <figcaption class="blockquote-footer mt-1" id="quote_person">
                    Neil Armstrong<span class="d-md-block d-none"><em>the first human to set foot on the moon</em></span>
                </figcaption>
            </figure>
        </div>
        <div class="container">
            <div class="d-flex flex-row align-items-center justify-content-evenly row mt-3 mt-md-5 mb-md-5 mb-0" data-aos="fade-left">
                <div class="col-md-6 col-12">
                    <img class="navix_rounded_image" src="img/rocket_on_ground1.jpeg" style="width: 100%;">
                </div>
                <div class="col-md-6 col-12 flex-grow-1 text-center px-5 py-2">
                    <h1 class="display-5 mt-2 mt-md-0">
                        The Experience
                    </h1>
                    <p class="lead">
                        Put simply, space <br class="d-md-none d-block">is within our reach.
                    </p>
                    <p>
                        We at Navix offer you a chance to escape your comfort zone and explore something about which many of us have wondered: space. Through our three tours, we seek to give everyone a chance to finally travel to space in a safe, exhilarating, and relatively inexpensive manner.
                    </p>
                </div>
            </div>
            <div class="d-flex flex-row align-items-center justify-content-evenly row mt-3 mt-md-0 mb-md-5 mb-0" data-aos="fade-right">
                <div class="col-md-6 col-12 d-md-none d-block">
                    <img class="navix_rounded_image" src="img/earth_from_space3.jpeg" style="width: 100%;">
                </div>
                <div class="col-md-6 col-12 flex-grow-1 text-center px-5 py-2">
                    <h1 class="display-5 mt-2 mt-md-0">
                        The View
                    </h1>
                    <p class="lead">
                        There's nothing like space, and <br class="d-md-none d-block">the endless mysteries it poses.
                    </p>
                    <p>
                        A beautiful blue and green sphere, with swirling clouds and shimmering land. The sight of city lights at night, the majesty of mountains and deserts, and the vastness of the oceans. That's Earth. Space offers a unique perspective on our planet, highlighting both its beauty and fragility. And now you can experience this yourself.
                    </p>
                </div>
                <div class="col-md-6 col-12 d-md-block d-none">
                    <img class="navix_rounded_image" src="img/earth_from_space3.jpeg" style="width: 100%;">
                </div>
            </div>
            <div class="d-flex flex-row align-items-center justify-content-evenly row mt-3 mt-md-0 mb-3 mb-md-5" data-aos="fade-left">
                <div class="col-md-6 col-12">
                    <img class="navix_rounded_image" src="img/rocket_launch1.jpeg" style="width: 100%;"> 
                </div>
                <div class="col-md-6 col-12 flex-grow-1 text-center px-5 py-2">
                    <h1 class="display-5 mt-2 mt-md-0">
                        About Us
                    </h1>
                    <p class="lead">
                        We're a company helping <br class="d-md-none d-block">people get into space.
                    </p>
                    <p>
                        When we were founded in 2023, we had one simple goal: to offer people a chance to escape Earth and go 
                        "above and beyond". Learn more about our story and how far we've come <a href="about.html" class="text_navix3" style="text-decoration: none;">here</a>.
                    </p>
                </div>
            </div>
            <div id="border"></div>
            <div data-aos="fade-up" data-aos-duration="500" style="margin-bottom:15px;">
                <br>
                <h1 class="display-6 text-center">Why Navix, you ask?</h1>
                <p class="lead text-center">Just look at some of our statistics:</p>
                <div class="d-flex flex-row text-center mt-4" id="stats">
                    <div class="pt-2 align-self-end bg_navix1" id="stat">
                        <h1 class="display-6 fw-semibold fst-italic mb-md-0 mt-2">5751</h1>
                        <p class="lead fw-normal mb-md-3 mb-3">flights/tours<br><span class="d-md-block d-none">to space</span></p>
                    </div>
                    <div class="pt-2 align-self-stretch bg_navix2" id="stat">
                        <h1 class="display-6 fw-semibold fst-italic align-self-center pt-4">97603</h1>
                        <p class="lead fw-normal">people sent<br>to space</p>
                    </div>
                    <div class="pt-2 align-self-end bg_navix3" id="stat">
                        <h1 class="display-6 fw-semibold fst-italic mb-md-0 mt-2">0</h1>
                        <p class="lead fw-normal mb-md-3 mb-3">mishaps<br><span class="d-md-block d-none">(meaning <span class="fw-bold">0</span> casualities)</span></p>
                    </div>
                </div>
                <p class="py-2 fs-5 text-center">
                    Years of experience and an unwavering commitment to safety make us the #1 space flight company in the world.
                </p>
            </div>
        </div>
        <div class="container" id="cards">
            <div class="text-center">
                <h1 class="display-4">
                    Helpful Links
                </h1>
                <p class="lead">
                    Explore tour options, the rockets used, and the training we provide.
                </p>
                <br>
            </div>
            <div class="d-flex justify-content-evenly row mb-0 mb-md-4" data-aos="fade-up" data-aos-duration="500">                                                                                                               
                <div class="card col-md-4 col-12 mb-5 mb-md-0" style="min-width: 300px; width: 30%;" id="helpful_link_1">
                    <img src="img/iss.jpeg" class="card-img-top" alt="..." id="card_img">
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark">Tours</h5>
                        <p class="card-text text-dark">Dive right in to the tours and explore the opportunities that we as Navix have to offer by clicking here.</p>
                        <a href="tours/main.html" class="btn">Explore Tours</a>
                    </div>
                </div>
                <!--
                <div class="card col-md-4 col-12 mb-5 mb-md-0" style="min-width: 300px; width: 30%;" id="helpful_link_2">
                    <img src="img/rocket_launch3.jpeg" class="card-img-top" alt="..." id="card_img">
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark">Spaceflight</h5>
                        <p class="card-text text-dark">Curious or confused about what spaceflight is? Well, we got you covered.</p>
                        <a href="spaceflight.html" class="btn">Explore Spaceflight</a>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-evenly row" data-aos="fade-up" data-aos-duration="500">
                -->
                <div class="card col-md-4 col-12 mb-5 mb-md-0" style="min-width: 300px; width: 30%;" id="helpful_link_3">
                    <img src="img/rocket_launch2.jpeg" class="card-img-top" id="card_img">
                    <div class="card-body text-center">                                                                                                             
                        <h5 class="card-title text-dark">Launches</h5>                                          
                        <p class="card-text text-dark">Navix uses SpaceX rockets. Learn more about launches, recovery, and the rockets used here.</p>                                                                    
                        <a href="launches.html" class="btn btn-primary">Explore Launches</a>
                    </div>
                </div>
                <div class="card col-md-4 col-12 mb-3 mb-md-0" style="min-width: 300px; width: 30%;" id="helpful_link_4">
                    <img src="img/astronaut_in_space.jpeg" class="card-img-top" id="card_img">
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark">Training</h5>
                        <p class="card-text text-dark">Before going into space, all tourists are given basic flight and space training, depending on tour parameters.</p>
                        <a href="training.html" class="btn btn-primary">Explore Training</a>
                    </div>
                </div>
            </div>
            <br class="d-md-block d-none">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </symbol>
            <symbol id="instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </symbol>
            <symbol id="twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </symbol>
        </svg>
        <hr>
        <div class="container mt-0">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 pb-5">
                <div class="col mb-1">
                    <img src="img/logo.png" class="d-inline-block" id="logo">
                    <img src="img/NavixInWhite.png" class="d-inline-block" id="footer_name"><br>
                    &copy;<em>2023. All rights reserved.</em><br>
                    2022-23 TSA Webmaster<br>
                    <a href="about.html#about_attribution" style="text-decoration: none; color: #ffbd4a;">Copyright Info</a><br><br>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-0"><a class="link-body-emphasis" href="https://twitter.com/" target="_blank" ><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="https://instagram.com/" target="_blank" ><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="https://facebook.com/" target="_blank" ><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                    </ul>
                </div>
                <div class="col mb-1"></div>
                <div class="col mb-1" style="text-align: right;">
                    <h4>Explore</h4>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 h6"><a href="index.html" class="p-0 text_navix3" style="text-decoration: none;">Home</a></li>
                        <li class="nav-item mb-2 h6"><a href="spaceflight.html" class="p-0 text_navix3" style="text-decoration: none;">Spaceflight</a></li>
                        <li class="nav-item mb-2 h6"><a href="launches.html" class="p-0 text_navix3" style="text-decoration: none;">Launches</a></li>
                        <li class="nav-item mb-2 h6"><a href="training.html" class="p-0 text_navix3" style="text-decoration: none;">Training</a></li>
                        <li class="nav-item mb-2 h6"><a href="about.html" class="p-0 text_navix3" style="text-decoration: none;">About</a></li>
                    </ul>
                </div>
                <div class="col mb-1" style="text-align: right;">
                    <h4>Tours</h4>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 h6"><a href="tours/main.html" class="p-0 text_navix3" style="text-decoration: none;">Main Page</a></li>
                        <li class="nav-item mb-2 h6"><a href="tours/tour1.html" class="p-0 text_navix3" style="text-decoration: none;">Around the World&#8482;</a></li>
                        <li class="nav-item mb-2 h6"><a href="tours/tour2.html" class="p-0 text_navix3" style="text-decoration: none;">Pinnacle&#8482;</a></li>
                        <li class="nav-item mb-2 h6"><a href="tours/tour3.html" class="p-0 text_navix3" style="text-decoration: none;">ISS&#8482;</a></li>
                    </ul>
                </div>
                <div class="col mb-1"  style="text-align: right;">
                    <h4>Register</h4>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 h6"><a href="accounts/signup.html" class="p-0 text_navix3" style="text-decoration: none;">Sign Up</a></li>
                        <li class="nav-item mb-2 h6"><a href="accounts/login.html" class="p-0 text_navix3" style="text-decoration: none;">Log In</a></li>
                        <li class="nav-item mb-2 h6"><a href="accounts/dashboard.html" class="p-0 text_navix3" style="text-decoration: none;">Dashboard</a></li>
                        <li class="nav-item mb-2 h6"><a href="terms&conditions.html" class="p-0 text_navix3" style="text-decoration: none;">Terms & Conditions</a></li>
                    </ul>
                </div>
            </footer>
        </div>
        
    </body>
</html>