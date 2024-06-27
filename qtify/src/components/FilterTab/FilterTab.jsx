import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTab.module.css";

const FilterTabs = ({ data }) => {
	const [value, setValue] = useState(0);

	const _handleTabs = (e, val) => {
		setValue(val);
	};

	function TabPanel(props) {
		const { children, value, index } = props;
		return <div>{value === index && <>{children}</>}</div>;
	}
	const filteredData = (tabIndex) => {
		if (tabIndex === 0) {
			return data; 
		} else {
			const tabLabel = ["Rock", "Pop", "Jazz", "Blues"][tabIndex - 1];
			return data.filter((item) => item.genre.key === tabLabel.toLowerCase());
		}
	};

	return (
		<div>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={_handleTabs} aria-label="basic tabs" TabIndicatorProps={{ style: { backgroundColor: 'var(--primary-background-color)' } }}>
						<Tab label="All" className={styles.tabText}/>
						<Tab label="Rock" className={styles.tabText}/>
						<Tab label="Pop" className={styles.tabText}/>
						<Tab label="Jazz" className={styles.tabText}/>
						<Tab label="Blues" className={styles.tabText}/>
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<div className={styles.filterWrapper}>
						<Section data={filteredData(0)} type="songs" header="all" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className={styles.filterWrapper}>
						<Section data={filteredData(1)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div className={styles.filterWrapper}>
						<Section data={filteredData(2)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<div className={styles.filterWrapper}>
						<Section data={filteredData(3)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<div className={styles.filterWrapper}>
						<Section data={filteredData(4)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
			</Box>
		</div>
	);
};

export default FilterTabs;