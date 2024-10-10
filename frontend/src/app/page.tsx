import React from "react";
import { Recycle, Coins, Award, ArrowRightCircle, Users, Target, Clock, Earth } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
	return (
		<div className="min-h-screen ">
			<header className="bg-white shadow-md sticky top-0 z-50">
				<nav className="container mx-auto px-6 py-3">
					<div className="flex items-center justify-between">
						<Image
							src="/images/ecoCoinLogo.jpeg"
							alt="EcoCoin Logo"
							width={150}
							height={150}
						/>
						<div className="hidden md:flex space-x-4">
							<a
								href="#how-it-works"
								className="text-gray-600 hover:text-green-500">
								How It Works
							</a>
							<a
								href="#benefits"
								className="text-gray-600 hover:text-green-500">
								Benefits
							</a>
							<a
								href="#levels"
								className="text-gray-600 hover:text-green-500">
								Level Up
							</a>
							<a
								href="#claim"
								className="text-gray-600 hover:text-green-500">
								Claim Rewards
							</a>
						</div>
					</div>
				</nav>
			</header>

			<main className=" py-8">
				<section className="container mx-auto text-center mb-16 h-screen flex flex-col justify-center items-center px-6">
					<h1 className="text-4xl md:text-8xl font-bold text-gray-800 mb-4">Turn Plastic into Prosperity</h1>
					<p className="text-xl text-gray-600 mb-8">Claim your EcoCoin rewards, level up, and amplify your impact. The more you recycle, the more you earn!</p>
					<Link
						href="/contribute"
						className="bg-green-500 rounded-full text-white px-6 py-3 text-lg font-semibold hover:bg-green-600 transition duration-300">
						Start Your Green Journey
					</Link>
					<Coins className="w-20 h-20 text-yellow-500 absolute top-40 right-40" />
					<Recycle className="w-20 h-20 text-green-500 absolute top-40 left-40" />
					<Earth className="w-9 h-9 text-blue-500 absolute top-[403px] right-[730px]" />
				</section>

				<section
					id="how-it-works"
					className="-mt-[100px] bg-green-200 py-20">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-green-500 mb-4">Turning Trash into Treasure</h2>
						<p className="text-gray-600">At EcoCoin, we've gamified recycling. Collect plastic waste, bring it to our collection points, and watch as it transforms into valuable EcoCoin tokens. Each collection is minted as a unique NFT, proving your impact and earning you rewards. But that's not all – consistently great performance unlocks new levels, multiplying your earning potential. It's not just about cleaning up; it's about growing your impact and rewards over time.</p>
					</div>
				</section>

				<section
					id="benefits"
					className="pb-16 bg-green-200">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-gray-800 mb-8">Reap the Rewards of Responsibility</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
							<FeatureCard
								icon={<Recycle className="w-8 h-8 text-green-500" />}
								title="Eco-Friendly"
								description="Collect plastic waste and make a real impact on the environment."
							/>
							<FeatureCard
								icon={<Coins className="w-8 h-8 text-yellow-500" />}
								title="Earn Rewards"
								description="Get EcoCoin tokens for your recycling efforts."
							/>
							<FeatureCard
								icon={<Award className="w-8 h-8 text-blue-500" />}
								title="Unique NFTs"
								description="Each collection is minted as a unique, verifiable NFT."
							/>
							<FeatureCard
								icon={<Clock className="w-8 h-8 text-purple-500" />}
								title="Auto-deploy"
								description="Rewards are automatically deployed when conditions are met."
							/>
							<FeatureCard
								icon={<Users className="w-8 h-8 text-indigo-500" />}
								title="Community Driven"
								description="Join a network of eco-conscious individuals making a difference."
							/>
							<FeatureCard
								icon={<Target className="w-8 h-8 text-red-500" />}
								title="Level Up"
								description="Increase your impact and rewards as you progress through levels."
							/>
						</div>
					</div>
				</section>

				<section
					id="levels"
					className="my-16 container mx-auto">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">Level Up, Earn More</h2>
					<p className="text-gray-600 mb-6">Your commitment to cleaning our planet doesn't go unnoticed. Our level system rewards consistent action:</p>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-gray-800 mb-4">How Leveling Works:</h3>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Start at Level 1 and earn base rewards for each plastic collection.</li>
							<li>Mint Level 1 tokens four times to qualify for the Level 2 NFT.</li>
							<li>Unlock Level 2 to boost your rewards and increase your impact.</li>
							<li>Keep climbing! Higher levels mean greater rewards and recognition.</li>
						</ul>
					</div>
				</section>

				<section
					id="claim"
					className="text-center container mx-auto">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Claim Your Impact?</h2>
					<p className="text-gray-600 mb-8">You've done the hard work of collecting plastic and leveling up. Now it's time to reap the rewards. Connect your wallet, verify your collections, and watch your CauseKoin balance grow. Every token and level-up is a testament to your commitment to a cleaner Earth.</p>
					<button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center mx-auto">
						Connect Wallet & Claim <ArrowRightCircle className="ml-2 w-5 h-5" />
					</button>
				</section>
			</main>

			<footer className="bg-gray-800 text-white py-6">
				<div className="container mx-auto px-6 text-center">
					<p>&copy; 2024 EcoCoin. Empowering and rewarding environmental action through blockchain technology.</p>
				</div>
			</footer>
		</div>
	);
};

const FeatureCard = ({ icon, title, description }) => (
	<div className="bg-white p-6 rounded-lg shadow-md">
		<div className="flex justify-center mb-4">{icon}</div>
		<h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default LandingPage;
