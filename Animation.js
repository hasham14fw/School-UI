
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.hero h1');
    const paragraph = document.querySelector('.hero p');

    if (heading && paragraph) {
        setTimeout(() => {
            heading.classList.add('animate');
        }, 200);

        setTimeout(() => {
            paragraph.classList.add('animate');
        }, 600);
    } else {
        console.error("Hero heading or paragraph not found.");
    }
});


// Responsive Sidebar Toggle
document.addEventListener("DOMContentLoaded", function () {
    const portalHamburger = document.getElementById("portal-hamburger");
    const portalSidebar = document.getElementById("portal-sidebar");
    const navHamburger = document.getElementById("hamburger");
    const navSidebar = document.getElementById("sidebar");

    function closeAllSidebars() {
        portalSidebar.classList.remove("active");
        navSidebar.classList.remove("active");
    }

    portalHamburger.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent triggering the document click
        if (portalSidebar.classList.contains("active") || navSidebar.classList.contains("active")) {
            closeAllSidebars();
        } else {
            closeAllSidebars();
            portalSidebar.classList.add("active");
        }
    });

    navHamburger.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent triggering the document click
        if (navSidebar.classList.contains("active") || portalSidebar.classList.contains("active")) {
            closeAllSidebars();
        } else {
            closeAllSidebars();
            navSidebar.classList.add("active");
        }
    });

    // Close sidebars when clicking anywhere outside
    document.addEventListener("click", function (e) {
        // If the click is outside the sidebars and hamburgers, close sidebars
        if (!portalSidebar.contains(e.target) && !portalHamburger.contains(e.target) &&
            !navSidebar.contains(e.target) && !navHamburger.contains(e.target)) {
            closeAllSidebars();
        }
    });
});
// Animated Nav
    document.addEventListener("DOMContentLoaded", function() {
        const nav = document.querySelector(".header nav");
        setTimeout(() => {
            nav.classList.add("animate-in");
        }, 200); // optional delay for smoother appearance
    });




function animateCount(el, target, duration) {
  let start = 0;
  const step = Math.ceil(target / (duration / 20));
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (target >= 1000 ? '+' : '');
      clearInterval(interval);
    } else {
      el.textContent = start;
    }
  }, 20);
}

function animateCount(el, target, duration) {
  let start = 0;
  const step = Math.ceil(target / (duration / 20));
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (target >= 1000 ? '+' : '');
      clearInterval(interval);
    } else {
      el.textContent = start;
    }
  }, 20);
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  const section = document.getElementById('stats-section');
  if (isInViewport(section) && !section.classList.contains('animated')) {
    section.classList.add('animated');
    document.querySelectorAll('.flip-card').forEach(card => card.classList.add('flip'));
    animateCount(document.getElementById('teacher-count'), 43, 2000);
    animateCount(document.getElementById('student-count'), 1100, 2500);
  }
});

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  document.querySelectorAll('.info-box').forEach(box => {
    observer.observe(box);
  });
