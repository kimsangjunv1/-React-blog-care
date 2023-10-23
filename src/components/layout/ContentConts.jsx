import React from "react";
import Section from "./../common/Section";
import SectionSpace from "./../common/SectionSpace";

import Item from "./../common/Item";

import TestImage001 from "./../../assets/img/test.png";

const ContentConts = () => {
	return (
		<main className="main">
			<div className="main_inner">
				<Section>
					<Item
						image={TestImage001}
						title="솜떡이 카톡테마"
						date="2022.02.02"
					/>
					<Item item={"아이템"} good={"굿"} />
					<Item item={"아이템"} good={"굿"} />
				</Section>
			</div>
		</main>
	);
};

export default ContentConts;
