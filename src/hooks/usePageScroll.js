import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function debounce(callback, delay) {
	let timer = null;
	return (...args) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			callback(...args);
		}, delay);
	}
}


export default function usePageScroll(maxSlides, links) {
	const [active, setActive] = useState(0);
	const navigate = useNavigate();
	
	const updateActive = debounce(setActive, 300);
	useEffect(() => {
		navigate(links[active]);
	}, [active, links, navigate]);

	useEffect(() => {
		const scrollHandler = (event) => {
			if (event.deltaY < 0) {
				if (active > 0) {
					updateActive(active => active - 1);
				}
			}
			else {
				if (active + 1 < maxSlides) {
					updateActive(active => active + 1);
				}
			}
		}
		window.addEventListener('wheel', scrollHandler);
		return () => window.removeEventListener('wheel', scrollHandler);
	});
	return [active, setActive];
}