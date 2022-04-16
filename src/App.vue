<template>
	<div class="absolute md:relative z-99 top-0 pt-14 md:pt-0 md:mt-14">
		<nav class="flex justify-between mx-8 md:mx-16 xl:mx-32">
			<div class="flex gap-12 items-center">
				<img src="./assets/images/logo.svg" alt="" />
				<div class="hidden md:block">
					<div class="flex gap-6">
						<a class="nav-text">Features</a>
						<a class="nav-text">Pricing</a>
						<a class="nav-text">Resources</a>
					</div>
				</div>
			</div>
			<div class="hidden md:block">
				<div class="flex items-center gap-8">
					<a class="nav-text">Login</a>
					<button class="button px-6 py-2">Signup</button>
				</div>
			</div>
			<img
				@click="toggle"
				class="h-6 w-8 md:hidden cursor-pointer"
				src="./assets/images/icon-hamburger.svg"
				alt=""
			/>
		</nav>
		<div
			class="
				overflow-hidden
				flex flex-col
				md:flex-row-reverse md:justify-between md:mt-8
				xl:mt-16
			"
		>
			<img
				class="
					ml-28
					-mr-20
					tablet:pl-10
					lg:pl-0
					md:ml-0 md:-mr-72
					lg:-mr-60
					xl:-mr-32
					xxl:-mr-20
					mt-24
					md:mt-0
					xxl:mt-8
					transform
					scale-125
					md:scale-90
					xl:scale-100
					xxl:scale-110
				"
				src="./assets/images/illustration-working.svg"
				alt=""
			/>
			<div
				class="
					mx-10
					md:mx-0 md:ml-16
					mt-16
					tablet:mt-20
					xl:ml-32
					text-center
					md:text-left md:max-w-sm
					lg:max-w-xl
				"
			>
				<p
					class="
						text-4xl
						font-bold
						text-secondary-gray
						lg:text-6xl
						xxl:text-7xl
						lg:leading-tight
						xxl:leading-snug
					"
				>
					More than just shorter links
				</p>
				<p class="text-neutral-gray mt-4 lg:w-3/4 xxl:text-xl">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<button class="button px-10 py-3 mt-6">Get Started</button>
			</div>
		</div>
		<div
			class="
				bg-dark-violet
				rounded-xl
				mx-8
				md:mx-16
				xl:mx-32
				mt-20
				overflow-hidden
				relative
			"
		>
			<img
				class="absolute top-0 right-0 z-1 md:hidden"
				src="./assets/images/bg-shorten-mobile.svg"
				alt=""
			/>
			<img
				class="absolute w-full h-full z-1 height-webkit hidden md:block"
				src="./assets/images/bg-shorten-desktop.svg"
				alt=""
			/>
			<div class="relative z-2 px-6 py-6 md:px-10 md:py-10 md:max-h-36">
				<div class="flex flex-col md:mb-0 md:flex-row gap-4">
					<div class="flex flex-1 flex-col">
						<input
							class="
								py-2
								px-2
								rounded-md
								text-gray-500
								placeholder-gray-500
								focus:outline-none focus:border-transparent
								height-webkit
							"
							:class="{
								'placeholder-red-400 ring-2 ring-red-500': invalid,
							}"
							@input="inputUrl"
							v-model="url"
							type="text"
							placeholder="Shorten a link here.."
						/>
						<p class="text-red-400 md:hidden italic text-sm mt-2">
							{{ message }}
						</p>
					</div>
					<button
						class="
							bg-primary-cyan
							text-white
							py-3
							md:px-10
							rounded-md
							hover:bg-bright-cyan
							duration-300
						"
						:class="{ 'bg-bright-cyan cursor-not-allowed': invalid || loading }"
						:disabled="loading || invalid"
						@click.prevent="shortenUrl"
					>
						Shorten It!
					</button>
				</div>
				<p class="text-red-400 hidden md:block text-sm italic mt-2">
					{{ message }}
				</p>
			</div>
		</div>
		<div class="bg-gray-200 px-8 md:px-16 xl:px-32 -mt-20 pt-24 pb-24">
			<div
				v-for="(url, i) in urls"
				:key="i"
				class="
					divide-y divide-gray-200
					mt-6
					md:divide-none md:flex
					justify-between
					items-baseline
					bg-white
					rounded-xl
					py-4
				"
			>
				<p class="text-gray-900 mb-3 px-4">{{ url.long_url }}</p>
				<div class="flex flex-col md:flex-row md:gap-6 px-4">
					<a :href="url.link" target="_blank" class="my-3 text-primary-cyan">{{
						url.link
					}}</a>
					<button
						class="rounded-lg text-white py-2"
						:class="{
							'bg-dark-violet md:px-sm': url.copied,
							'bg-primary-cyan md:px-10': !url.copied,
						}"
						@click.prevent="copiedUrl(url.link)"
					>
						{{ url.copied ? "Copied!" : "Copy" }}
					</button>
				</div>
			</div>
			<div class="mt-24 text-center mb-4">
				<p class="font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
					Advanced Statistics
				</p>
				<p class="text-gray-400 px-4 leading-relaxed max-w-lg mx-auto">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div class="relative">
				<div
					class="z-1 mt-72 border-t-8 hidden lg:block border-primary-cyan"
				></div>
				<div class="z-1 lg:hidden flex justify-center">
					<div class="absolute border-l-8 h-sm mt-16 border-primary-cyan"></div>
				</div>
				<div
					class="
						relative
						z-2
						flex flex-col
						lg:-mt-72 lg:items-start lg:flex-row lg:gap-8
						overflow-hidden
					"
				>
					<div
						class="
							bg-white
							px-8
							flex flex-col
							text-center
							lg:text-left
							items-center
							lg:items-start
							justify-center
							lg:justify-start
							mt-24
							py-10
						"
					>
						<div
							class="
								bg-dark-violet
								flex
								justify-center
								py-6
								px-6
								rounded-full
								-mt-20
								mb-8
							"
						>
							<img src="./assets/images/icon-brand-recognition.svg" alt="" />
						</div>
						<p class="text-xl sm:text-xl text-gray-900 mb-4 font-extrabold">
							Brand Recognition
						</p>
						<p class="text-gray-400 max-w-md mx-auto leading-relaxed">
							Boost your brand recognition with each click. Generic links don’t
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
					<div
						class="
							bg-white
							px-8
							flex flex-col
							text-center
							lg:text-left
							items-center
							lg:items-start
							justify-center
							lg:justify-start
							mt-24
							lg:mt-36
							py-10
						"
					>
						<div
							class="
								bg-dark-violet
								flex
								justify-center
								py-6
								px-6
								rounded-full
								-mt-20
								mb-8
							"
						>
							<img src="./assets/images/icon-detailed-records.svg" alt="" />
						</div>
						<p class="text-xl sm:text-xl text-gray-900 mb-4 font-extrabold">
							Detailed Records
						</p>
						<p class="text-gray-400 max-w-md mx-auto leading-relaxed">
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</div>
					<div
						class="
							bg-white
							px-8
							flex flex-col
							text-center
							lg:text-left
							items-center
							lg:items-start
							justify-center
							lg:justify-start
							mt-24
							lg:mt-48
							py-10
						"
					>
						<div
							class="
								bg-dark-violet
								flex
								justify-center
								py-6
								px-6
								rounded-full
								-mt-20
								mb-8
							"
						>
							<img src="./assets/images/icon-fully-customizable.svg" alt="" />
						</div>
						<p class="text-xl sm:text-xl text-gray-900 mb-4 font-extrabold">
							Fully Customizable
						</p>
						<p class="text-gray-400 max-w-md mx-auto leading-relaxed">
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-dark-violet relative">
			<img
				class="absolute z-1 w-full h-full height-webkit hidden md:block"
				src="./assets/images/bg-boost-desktop.svg"
				alt=""
			/>
			<img
				class="absolute z-1 w-full h-full height-webkit md:hidden"
				src="./assets/images/bg-boost-mobile.svg"
				alt=""
			/>
			<div class="relative z-2 mx-8 md:mx-16 xl:mx-32 py-20 text-center">
				<p class="text-white font-bold text-2xl sm:text-3xl mb-4">
					Boost your links today
				</p>
				<button class="button px-10 py-3">Get Started</button>
			</div>
		</div>
		<footer
			class="
				bg-very-dark-violet
				flex flex-col
				lg:justify-between lg:items-start lg:px-16
				xl:px-32
				lg:flex-row
				gap-10
				items-center
				py-14
			"
		>
			<img src="./assets/images/logo-white.svg" alt="" />
			<div class="flex flex-col lg:flex-row lg:items-start gap-12">
				<div class="text-center lg:text-left">
					<p class="text-gray-300 font-bold mb-5">Features</p>
					<div class="flex flex-col gap-2 text-gray-500">
						<a class="footer-text">Link Shortening</a>
						<a class="footer-text">Branded Links</a>
						<a class="footer-text">Analytics</a>
					</div>
				</div>
				<div class="text-center lg:text-left">
					<p class="text-gray-300 font-bold mb-5">Resources</p>
					<div class="flex flex-col gap-2 text-gray-500">
						<a class="footer-text">Blog</a>
						<a class="footer-text">Developers</a>
						<a class="footer-text">Support</a>
					</div>
				</div>
				<div class="text-center lg:text-left">
					<p class="text-gray-300 font-bold mb-5">Company</p>
					<div class="flex flex-col gap-2 text-gray-500">
						<a class="footer-text">About</a>
						<a class="footer-text">Our Team</a>
						<a class="footer-text">Careers</a>
						<a class="footer-text">Contact</a>
					</div>
				</div>
				<div class="flex gap-6">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path
							d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
						/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
						<path
							d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
						/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path
							d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
						/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
						/>
					</svg>
				</div>
			</div>
		</footer>
		<div class="bg-dark-violet text-xs text-white text-center">
			Challenge by
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
				>Frontend Mentor</a
			>. Coded by <a href="#">Sofita Nur Fitriana</a>.
		</div>
	</div>
	<div v-if="showMenu" class="relative z-100 px-8 w-full mt-28 md:hidden">
		<div
			class="
				bg-dark-violet
				font-bold
				rounded-lg
				divide-y divide-gray-600
				px-4
				py-6
				text-center text-white
			"
		>
			<div class="flex flex-col gap-6">
				<a @click="toggle">Features</a>
				<a @click="toggle">Pricing</a>
				<a @click="toggle" class="mb-6">Resources</a>
			</div>
			<div class="flex flex-col gap-6">
				<a @click="toggle" class="mt-6">Login</a>
				<button @click="toggle" class="button py-2 font-bold">Sign Up</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showMenu: false,
			url: "",
			message: "",
			invalid: false,
			urls: [],
			copyUrl: "",
			loading: false,
		};
	},
	methods: {
		toggle() {
			this.showMenu = !this.showMenu;
		},
		copiedUrl(url) {
			navigator.clipboard.writeText(url);

			this.urls.map((item) => {
				item.link === url ? (item.copied = true) : (item.copied = false);
			});
		},
		shortenUrl() {
			this.inputUrl();
			if (!this.invalid) {
				this.loading = true;
				fetch("https://api-ssl.bitly.com/v4/shorten", {
					method: "POST",
					mode: "cors",
					headers: {
						Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						long_url: this.url,
						domain: "bit.ly",
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						let url = {
							long_url: data.long_url,
							link: data.link,
							copied: false,
						};
						const urls = JSON.parse(sessionStorage.getItem("urls") || "[]");
						let findUrl = urls.filter((item) => item.long_url === url.long_url);

						if (findUrl.length == 0) {
							urls.push(url);
							sessionStorage.setItem("urls", JSON.stringify(urls));
							this.urls = urls;
						}
						this.url = "";
						this.loading = false;
					});
			}
		},
		inputUrl() {
			const urlRegex =
				/^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
			const result = this.url.match(urlRegex);
			if (this.url === "") {
				this.invalid = true;
				this.message = "Please add a link";
			} else if (!result) {
				this.invalid = true;
				this.message = "Invalid link";
			} else {
				this.invalid = false;
				this.message = "";
			}
		},
	},
	created() {
		this.urls = JSON.parse(sessionStorage.getItem("urls"));
	},
};
</script>

<style>
#app {
	font-family: Poppins;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.height-webkit {
	height: -webkit-fill-available;
}

.px-button-copied {
	padding-left: 1.8rem;
	padding-right: 1.8rem;
}
a {
	cursor: pointer;
}
</style>
