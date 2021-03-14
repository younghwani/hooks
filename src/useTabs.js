import {useState} from "react";

const content = [
	{
		tab: "Section 1",
		content: "I'm the content of Section 1",
	},
	{
		tab: "Section 2",
		content: "I'm the content of Section 2",
	},
];

const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
	};
};

export default useTabs;