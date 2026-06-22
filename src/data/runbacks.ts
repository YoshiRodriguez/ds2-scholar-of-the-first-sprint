const bossRunbacks = [
	{
		id: 1,
		title: "The Last Giant",
		location: "Forest of the Fallen Giants",
		url: "https://www.youtube.com/embed/BTA9s0xdVZM",
		estimatedTime: "01:00",
		difficulty: "Easy",
		requirements: "Opened the barred door downstairs to the right.",
		image: "the-last-giant.webp",
		notes: `The very first boss (if following the intended route). You can skip the two soldiers downstairs, but killing them is preferred. The only required kill is the soldier just outside the fog wall.
        You can also summon Sellsword Luet and Mild Mannered Pate (if you completed his mini-quest) right outside the fog wall.`,
	},
	{
		id: 2,
		title: "The Pursuer",
		location: "Forest of the Fallen Giants",
		url: "https://www.youtube.com/embed/Q4MZ9qyrfdY",
		estimatedTime: "00:50",
		difficulty: "Easy",
		requirements: `○ Defeated the Last Giant and gotten the Soldier Key.
			○ Opened the barred door behind the fog wall.`,
		image: "the-pursuer.png",
		notes: `Run past all enemies along the way. The two soldiers guarding the entrance that used to have a fog wall can catch you off guard, so run quickly past them.

        Watch out for the soldier with the bow upstairs to the right just outside of the fog wall.`,
	},
	{
		id: 3,
		title: "Dragonrider",
		location: "Heide's Tower of Flame",
		url: "https://www.youtube.com/embed/DwqlC01-KM0",
		estimatedTime: "00:45",
		difficulty: "Easy",
		requirements: "None.",
		image: "dragonrider-1.png",
		notes: `This time, you can run past every enemy due to their low movement speed, but beware the mace-wielding Old Knights, as they're the ones with the fastest attack speed and longest reach. A single, well-timed dodge will be enough to run past them. Bait the one standing just outside the fog wall.
        
        If you haven't killed the Old Dragonslayer yet, the Heide Knights will stay put and won't attack you unless you hit them first.`,
	},
	{
		id: 4,
		title: "Old Dragonslayer",
		location: "Cathedral of Blue",
		url: "https://www.youtube.com/embed/tOlF9eTX7JU",
		estimatedTime: "01:00",
		difficulty: "Medium (First Time: Hard)",
		requirements:
			"Killed the dragon guarding the bridge to the Cathedral of Blue and pulled the lever to lower it.",
		image: "old-dragonslayer.png",
		notes: `This time, you can also run past every enemy without facing them, but beware, as the very first mob clear will surely be hard for old and new players alike. The guardian dragon doesn't respawn, meaning that you only have to kill it once to easily run back to the Old Dragonslayer.
        
        Reach the dragon by running to its platform before it attacks with its fire breath. Lure the lance-wielding Heide knight out of the dragon's breath range with arrows so that you don't have to face both at the same time. Killing him is tricky due to his quick moveset, so blocking his attacks is easier than rolling away.`,
	},
	{
		id: 5,
		title: "Flexile Sentry",
		location: "No Man's Wharf",
		url: "https://www.youtube.com/embed/GEd7qazmAcc",
		estimatedTime: "01:20",
		difficulty: "Easy (First Time: Hard)",
		requirements:
			"Lowered the bridge shortcut between the right planks and the ship.",
		image: "flexile-sentry.png",
		notes: `Reaching the other side of the bridge to lower the bridge will require you to run through, essentially, the whole level at least once. Try lighting all torches at once so the runback also becomes easier.
        
        You can make the Varangian Sailor hanging from the planks fall by simply hitting it with a Throwing Knife. After dealing with the bowman near the intersection, deal with the other Sailor at the left. Kill the other soldier along the way to the ship.
        
        Above the entrance to the ship's cabins lie an Undead Jailer and another Sailor. You can simply run past them to reach the fog wall.`,
	},
	{
		id: 6,
		title: "Ruin Sentinels",
		location: "Lost Bastille",
		url: "https://www.youtube.com/embed/XX8GiQWq-iM",
		estimatedTime: "01:00",
		difficulty: "Easy (First Time: Medium)",
		requirements:
			"Unpetrified the statue blocking the door to the prison cells building, then opened the door shortcut downstairs.",
		image: "ruin-sentinels.png",
		notes: `The first time you clear the path towards the Ruin Sentinels, avoid pulling the level that opens the corridor leading to them so that the other swordsmen can't reach you.
        
        You can skip both Undead Jailors along the way and ignore the Stray Hounds next to the bonfire.        
        
        The door shortcut lets you avoid the swarm of Royal Swordsmen usually encountered when entering the building, but using it can be tricky; the simplest way of doing so is aligning yourself.        

        You can also summon Pilgrim Belclaire in a prison cell shortly before the gate.`,
	},
	{
		id: 7,
		title: "Lost Sinner",
		location: "Lost Bastille",
		url: "https://www.youtube.com/embed/ZzlWCF5sX1s",
		estimatedTime: "02:20",
		difficulty: "Medium",
		requirements:
			"Unlocked either of the gates to the long bridge leading to the Sinner.",
		image: "lost-sinner.png",
		notes: `Avoid the Royal Swordsman near the bonfire by hugging the battlements closest to the ladder.

        You can summon Lucatiel of Mirrah in a corner of the room where the elevator drops you.

		The flooded prisoner cells are guarded by a Flexile Sentry. Avoid it by running through the right pathway and climbing the stairs (either the left or right ones). Don't forget to quickly kill the Rupture Hollows sitting at the lower steps.

		If you possess the Antiquated Key, you can open the barred doors on the upper cells leading to the Lost Sinner. Otherwise, you must have pulled the lever in the lower level previously to go through after escaping the Flexile Sentry. It's highly recommended to acquire it, as doing so will allow you to open the cells at each side of the boss arena's entrance to light up the oil within each and the room, making the boss fight easier by increasing your lock-on range.
		`,
	},
	{
		id: 8,
		title: "Skeleton Lords",
		location: "Huntsman's Copse",
		url: "https://www.youtube.com/embed/EaH1cmEKulY",
		estimatedTime: "00:45",
		difficulty: "Easy",
		requirements: `○ Unlocked the Undead Lockaway bonfire.
			○ Opened all gates of the right path.`,
		image: "skeleton-lords.png",
		notes: `TODO`,
	},
	{
		id: 9,
		title: "Executioner's Chariot",
		location: "Undead Purgatory",
		url: "https://www.youtube.com/embed/ZzlWCF5sX1s",
		estimatedTime: "02:10",
		difficulty: "Brutal",
		requirements:
			"Killed the Red Phantom guarding the entrance to the Undead Purgatory",
		image: "executioners-chariot.png",
		notes: `TODO.`,
	},
	{
		id: 10,
		title: "Covetous Demon",
		location: "Earthen Peak",
		url: "https://www.youtube.com/embed/wJGFPlG11DU",
		estimatedTime: "01:30",
		difficulty: "Medium",
		requirements: "None",
		image: "covetous-demon.png",
		notes: `TODO.`,
	},
	{
		id: 11,
		title: "Mytha, The Baneful Queen",
		location: "Earthen Peak",
		url: "https://www.youtube.com/embed/JA7lLme6O_k",
		estimatedTime: "00:35",
		difficulty: "Easy",
		requirements: "Unlocked the Upper Earthen Peak bonfire.",
		image: "mytha-the-baneful-queen.png",
		notes: `TODO.`,
	},
	{
		id: 12,
		title: "Smelter Demon",
		location: "Earthen Peak",
		url: "https://www.youtube.com/embed/nieBx0j1mQE",
		estimatedTime: "00:35",
		difficulty: "Brutal",
		requirements:
			"Lowered both sides of the middle bridge connecting the lava pool.",
		image: "smelter-demon-1.png",
		notes: `TODO.`,
	},
];

export default bossRunbacks;
