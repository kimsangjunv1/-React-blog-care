import React from "react";

const HeaderConts = ({ props }) => {
	return (
		<header>
			<div className="header_inner">
				<h2>DashBoard</h2>
				<input type="text" placeholder="검색어를 입력해주세요" />
				<ul>
					<li>삼성테마</li>
					<li>카톡테마</li>
					<li>인기테마</li>
					<hr />
					<li>삼성테마</li>
					<li>카톡테마</li>
					<li>인기테마</li>
				</ul>
			</div>
		</header>
	);
};

export default HeaderConts;
