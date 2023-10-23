import React from "react";
import Section from "./../common/Section";
import SectionSpace from "./../common/SectionSpace";

import Item from "./../common/Item";

const ContentConts = () => {
	return (
		<main>
			<Section>
				<Item item={"아이템"} good={"굿"} />
				<h2>asdkasd</h2>
				<SectionSpace height={80} />
				<h2>asdkasd</h2>
			</Section>
		</main>
	);
};

export default ContentConts;
