/**
 * Algorithm: 桶排序
 * Description: 使用多个桶存储原数组中的元素，再对每个桶内使用排序算法进行排序，最后将多个桶进行排序
 */
import { insertionSort } from "./insertion-sort.js";

const bucketSort = (array, bucketSize = 5) => {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
};

const createBuckets = (array, bucketSize) => {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  const buckets = [];
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  for (let i = 0; i < bucketCount; i += 1) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i += 1) {
    const idx = Math.floor((array[i] - minValue) / bucketSize);
    buckets[idx].push(array[i]);
  }

  return buckets;
};

const sortBuckets = (buckets) => {
  const sorted = [];
  for (let i = 0; i < buckets.length; i += 1) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sorted.push(...buckets[i]);
    }
  }

  return sorted;
};

// test
const array = [2, 3, 7, 4, 1, 6, 9, 8];
console.log(bucketSort(array));
