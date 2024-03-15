const body = document.body
const hamburgerBtn = document.querySelector('.nav__hamburger')

const navItems = document.querySelector('.nav__items')
const logo = document.querySelector('.nav__logo')
const nav = document.querySelector('.nav')

function toggleHamburgerBtn() {
	hamburgerBtn.classList.toggle('active-hamburger')
	navItems.classList.toggle('active-items')
	logo.classList.toggle('active-logo')
	//block scroll when menu is active
	body.classList.toggle('nav-open')
}

hamburgerBtn.addEventListener('click', toggleHamburgerBtn)

function addBackgroundNav() {
	if (scrollY < 150) {
		nav.classList.remove('nav-background')
	} else {
		nav.classList.add('nav-background')
	}
}
addEventListener('scroll', addBackgroundNav)

//_______________________________________________________OBSERV

const leftSideObiect = document.querySelectorAll('.left-side')
const middleSideObiect = document.querySelectorAll('.middle-side')
const rightSideObiect = document.querySelectorAll('.right-side')

const observerTop = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show-left-animation')
				observerTop.unobserve(entry.target)
			}
		})
	},
	{
		threshold: 0.35,
	}
)

const observermiddle = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show-middle-animation')
				observermiddle.unobserve(entry.target)
			}
		})
	},
	{
		threshold: 0.35,
	}
)

const observerRight = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show-right-animation')
				observerRight.unobserve(entry.target)
			}
		})
	},
	{
		threshold: 0.35,
	}
)

leftSideObiect.forEach(leftObiect => {
	observerTop.observe(leftObiect)
})

middleSideObiect.forEach(middleObiect => {
	observermiddle.observe(middleObiect)
})

rightSideObiect.forEach(rightObiect => {
	observerRight.observe(rightObiect)
})

//_______________________________________________________HOVER IMG SERVICES SECTION

const serviceImg = document.querySelectorAll('.services__service--img')

serviceImg.forEach(service => {
	const more = service.querySelector('.hover-know-more')

	service.addEventListener('mouseover', () => {
		more.style.opacity = '1'
	})

	service.addEventListener('mouseleave', () => {
		more.style.opacity = '0'
	})
})

//_______________________________________________________counter
const counterItems = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.counters__box')

const options = {
	rootMargin: '-300px',
}

const startCounter = entry => {
	if (entry[0].isIntersecting) {
		counterItems.forEach(counter => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number')
				const value = parseInt(counter.textContent)

				const speed = finalNumber / 300

				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 1)
				} else {
					counter.textContent = finalNumber
				}
			}

			updateCounter()
		})
	}
}

const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)

const sections = document.querySelectorAll('section')
const menuItems = document.querySelectorAll('.nav__link')

const optionsScroll = {
	threshold: [0.75],
}

const handleScrollspy = entries => {
	entries.forEach(entry => {
		const activeNav = document.querySelector(`a[href='#${entry.target.id}']`)

		if (entry.isIntersecting) {
			menuItems.forEach(item => item.classList.remove('activeNav'))
			activeNav.classList.add('activeNav')
			console.log('siema1')
		}
	})
}

const observerScroll = new IntersectionObserver(handleScrollspy, optionsScroll)

sections.forEach(section => {
	observerScroll.observe(section)
})
