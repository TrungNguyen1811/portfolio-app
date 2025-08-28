// This shim ensures a default deepmerge export that also exposes `.all`.
// Some prod bundles of dependencies (e.g., Formik) expect `deepmerge.all`.
// We wrap the upstream deepmerge and add `.all` if it's missing.

import upstreamDeepmerge from 'deepmerge';

function deepmergeShim(target, source, options) {
	return upstreamDeepmerge(target, source, options);
}

// Provide deepmerge.all(list, options)
deepmergeShim.all = function all(list, options) {
	if (!Array.isArray(list)) {
		throw new TypeError('deepmerge.all expects an array of items');
	}
	// Start from the first element type: array -> [], object -> {}
	const initialAccumulator = Array.isArray(list[0]) ? [] : {};
	return list.reduce((accumulator, item) => upstreamDeepmerge(accumulator, item, options), initialAccumulator);
};

export default deepmergeShim;


