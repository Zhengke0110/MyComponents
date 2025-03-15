/**
 * 获取图像元素数组
 * 该函数接受一个HTMLElement数组，返回一个HTMLImageElement数组，包含所有子图像元素
 * 如果输入数组为空或未提供，则返回一个空数组
 *
 * @param itemElements HTMLElement数组，代表可能包含图像的元素集合
 * @returns HTMLImageElement数组，包含所有找到的图像元素
 */
export const getImgElements = (
  itemElements: HTMLElement[]
): HTMLImageElement[] => {
  // 检查输入数组是否为空或未提供，如果是，则返回一个空数组
  if (!itemElements || itemElements.length === 0) return [];

  // 初始化一个空数组，用于存储所有图像元素
  const imgElements: HTMLImageElement[] = [];

  // 遍历输入的元素数组
  for (const el of itemElements) {
    // 检查当前元素是否为HTMLElement，如果不是，则输出警告并跳过当前元素
    if (!(el instanceof HTMLElement)) {
      console.warn("Non-HTMLElement found in itemElements, skipping...");
      continue;
    }

    // 将当前元素中的所有图像元素添加到图像元素数组中
    imgElements.push(...Array.from(el.querySelectorAll("img")));
  }

  // 返回包含所有图像元素的数组
  return imgElements;
};

/**
 * 获取所有图片元素的 src 属性数组
 *
 * 此函数接受一个 HTMLImageElement 类型的数组作为输入，返回一个包含这些元素 src 属性的字符串数组
 * 主要用途是快速收集页面上一组 img 标签的图片地址
 *
 * @param itemElements HTMLImageElement 类型的数组，代表一组 img 标签
 * @returns 返回一个字符串数组，包含每个 img 标签的 src 属性
 * @throws 如果输入不是数组，则抛出错误
 */
export const getAllImg = (itemElements: HTMLImageElement[]): string[] => {
  // 检查输入是否为数组，避免意外传入非数组类型
  if (!Array.isArray(itemElements)) {
    throw new Error("Input must be an array of HTMLImageElement");
  }

  // 如果数组为空，直接返回空数组
  if (itemElements.length === 0) return [];

  // 获取所有图片元素的 src 属性
  return itemElements.map((imgElement) => imgElement.src);
};

/**
 * 等待一组图像加载完成
 *
 * 此函数接收一个图像URL数组，并返回一个Promise，该Promise在所有图像加载成功时解析，
 * 解析值为一个对象数组，每个对象包含加载成功的图像URL和其在原数组中的索引如果某个图像加载失败，
 * Promise将被拒绝，并提供加载失败的图像URL和错误信息这使得调用者可以处理图像加载过程中的错误
 *
 * @param imgs 图像URL数组，代表需要加载的图像
 * @returns 返回一个Promise，该Promise解析为一个对象数组，每个对象包含图像URL和索引
 */
export const onComplateImgs = (
  imgs: string[]
): Promise<{ img: string; index: number }[]> => {
  // 如果图像数组为空，直接返回一个解析为空数组的Promise
  if (imgs.length === 0) return Promise.resolve([]);

  // 使用map创建一个Promise数组，用于加载每个图像
  const promiseAll = imgs.map((img, index) => {
    // 返回一个新的Promise，用于处理单个图像的加载
    return new Promise<{ img: string; index: number }>((resolve, reject) => {
      // 创建一个新的Image对象
      const imageObj = new Image();
      // 设置Image对象的src属性为当前图像URL
      imageObj.src = img;
      // 当图像加载成功时，解析Promise
      imageObj.onload = () => {
        resolve({ img, index });
      };
      // 当图像加载失败或中止时，拒绝Promise
      imageObj.onerror = imageObj.onabort = () => {
        reject(new Error(`Failed to load image: ${img}`));
      };
    });
  });

  // 使用Promise.all等待所有图像加载完成，如果加载过程中有图像失败，则捕获错误并重新抛出
  return Promise.all(promiseAll).catch((error) => {
    // 打印错误信息到控制台
    console.error("Error loading images:", error);
    // 抛出错误，让调用者处理
    throw error;
  });
};

/**
 * 获取对象中最小的数值
 * 该函数旨在找出给定对象中所有数值属性的最小值，用于场景如布局调整等
 * @param columnHeightObj 一个包含数值的非空对象，键值对中的值应为数字类型
 * @returns 返回对象中最小的数值，如果对象为空或不包含数字类型，则返回null
 * @throws 如果输入不是非空对象，则抛出错误
 */
export const getMinHeight = (
  columnHeightObj: Record<string, number>
): number | null => {
  // 参数验证
  if (typeof columnHeightObj !== "object" || columnHeightObj === null) {
    throw new Error("Input must be a non-null object");
  }

  // 获取对象值并过滤非数字类型
  const columnHeightArr: number[] = Object.values(columnHeightObj).filter(
    (value): value is number => typeof value === "number"
  );

  // 处理空对象或过滤后为空的情况
  if (columnHeightArr.length === 0) {
    return null;
  }

  // 计算最小值
  return Math.min(...columnHeightArr);
};

/**
 * 获取最大高度
 *
 * 该函数旨在找出给定对象中所有有效高度值的最大值它首先提取对象中的所有高度值，
 * 过滤掉无效的数值，然后找出剩余值中的最大值如果没有任何有效的高度值，则返回0
 *
 * @param columnHeightObj 一个键值对对象，其中包含不同列的高度值
 * @returns 返回最大的高度值如果没有任何有效的高度值，则返回0
 */
export const getMaxHeight = (
  columnHeightObj: Record<string, number>
): number => {
  // 将对象中的高度值提取到一个数组中，并过滤掉非有限数值
  const columnHeightArr: number[] = Object.values(columnHeightObj).filter(
    Number.isFinite
  );

  // 如果数组为空，则返回0
  if (columnHeightArr.length === 0) return 0;

  // 返回数组中的最大值
  return Math.max(...columnHeightArr);
};

export interface ColumnHeightObj {
  [key: string]: number;
}

/**
 * 获取具有最小高度的列的键
 *
 * 此函数通过遍历一个包含列高度的对象，找到高度最小的列，并返回其键
 * 如果输入对象为空或无效，函数将返回undefined
 * 如果高度值不是数字，函数将抛出错误
 *
 * @param columnHeightObj 一个包含列键和对应高度的对象
 * @returns 返回具有最小高度的列的键，如果没有有效输入则返回undefined
 */
export const getMinHeightColumn = (
  columnHeightObj: ColumnHeightObj
): string | undefined => {
  // 验证输入是否为空对象或无效输入
  if (Object.keys(columnHeightObj).length === 0) {
    return undefined;
  }

  // 获取最小高度
  let minHeight = Infinity;
  for (const key in columnHeightObj) {
    if (columnHeightObj.hasOwnProperty(key)) {
      const height = columnHeightObj[key];
      // 验证高度值是否为数字
      if (typeof height !== "number") {
        throw new Error("Invalid height value, expected a number");
      }
      // 更新最小高度
      if (height < minHeight) {
        minHeight = height;
      }
    }
  }

  // 找到最小高度对应的键
  for (const key in columnHeightObj) {
    if (columnHeightObj.hasOwnProperty(key)) {
      // 返回具有最小高度的键
      if (columnHeightObj[key] === minHeight) {
        return key;
      }
    }
  }

  // 理论上不会到达这里，但为了类型系统完整
  return undefined;
};

/**
 * 布局算法类型定义
 * 定义瀑布流可以使用的不同布局算法类型
 */
export enum LayoutAlgorithm {
  DEFAULT = 'default',   // 默认算法 - 找最短列
  BALANCED = 'balanced', // 均衡算法 - 尝试平衡所有列高度
  COMPACT = 'compact'    // 紧凑算法 - 尝试填充所有可用空间
}

/**
 * 计算符合均衡布局算法的下一个列索引
 * 尝试保持所有列的高度大致相等
 * 
 * @param columnHeightObj 列高度对象
 * @param itemHeight 当前项的高度
 * @returns 最适合放置当前项的列索引
 */
export const getBalancedColumn = (
  columnHeightObj: Record<string, number>,
  itemHeight: number
): string => {
  // 计算放入每列后的高度差异
  const heightDifferences: Record<string, number> = {};
  let totalHeight = 0;
  
  // 计算当前总高度
  Object.values(columnHeightObj).forEach(height => {
    totalHeight += height;
  });
  
  // 计算平均高度
  const avgHeight = totalHeight / Object.keys(columnHeightObj).length;
  
  // 计算每列添加新项后与平均高度的差异
  for (const column in columnHeightObj) {
    if (columnHeightObj.hasOwnProperty(column)) {
      const newHeight = columnHeightObj[column] + itemHeight;
      heightDifferences[column] = Math.abs(newHeight - avgHeight);
    }
  }
  
  // 找出差异最小的列
  let minDiffColumn = Object.keys(columnHeightObj)[0];
  let minDiff = heightDifferences[minDiffColumn];
  
  for (const column in heightDifferences) {
    if (heightDifferences[column] < minDiff) {
      minDiff = heightDifferences[column];
      minDiffColumn = column;
    }
  }
  
  return minDiffColumn;
};

/**
 * 计算符合紧凑布局算法的下一个位置
 * 尝试找到最小化空白空间的位置
 * 
 * @param columnHeightObj 列高度对象
 * @param itemWidth 当前项的宽度
 * @param itemHeight 当前项的高度
 * @param containerWidth 容器宽度
 * @returns 最适合放置当前项的位置和列索引
 */
export const getCompactPosition = (
  columnHeightObj: Record<string, number>,
  itemWidth: number,
  itemHeight: number,
  containerWidth: number
): { column: string; left: number; top: number } => {
  // 先使用最小高度列作为默认选择
  const minColumn = getMinHeightColumn(columnHeightObj) || '0';
  const minHeight = columnHeightObj[minColumn];
  
  // 默认位置
  const defaultPosition = {
    column: minColumn,
    left: parseInt(minColumn) * itemWidth,
    top: minHeight
  };
  
  // 这里是简化的紧凑布局实现
  // 完整实现可能需要检查每个可能的位置以找出最优放置点
  return defaultPosition;
};

/**
 * 检测浏览器是否支持Intersection Observer API
 * 用于确定是否可以使用懒加载和虚拟滚动功能
 * 
 * @returns 布尔值，表示是否支持Intersection Observer
 */
export const supportsIntersectionObserver = (): boolean => {
  return 'IntersectionObserver' in window && 
         'IntersectionObserverEntry' in window && 
         'intersectionRatio' in window.IntersectionObserverEntry.prototype;
};

/**
 * 节流函数，用于限制高频率事件的执行频率
 * 
 * @param fn 需要节流的函数
 * @param delay 延迟执行的毫秒数
 * @returns 节流后的函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T, 
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    return fn(...args);
  };
};

/**
 * 计算元素的自然高度，考虑内部图像加载
 * 
 * @param element 要计算高度的HTML元素
 * @param defaultHeight 默认高度，当无法计算时返回
 * @returns Promise，解析为元素的自然高度
 */
export const calculateNaturalHeight = (
  element: HTMLElement, 
  defaultHeight: number = 0
): Promise<number> => {
  return new Promise((resolve) => {
    // 检查元素是否包含图像
    const images = Array.from(element.querySelectorAll('img'));
    
    if (images.length === 0) {
      // 无图像，直接返回当前高度
      resolve(element.offsetHeight || defaultHeight);
      return;
    }
    
    // 为所有图像创建加载Promise
    const imagePromises = images.map(img => 
      new Promise<void>((resolveImg) => {
        if (img.complete) {
          resolveImg();
        } else {
          img.onload = () => resolveImg();
          img.onerror = () => resolveImg();
        }
      })
    );
    
    // 当所有图像加载完成后，返回元素高度
    Promise.all(imagePromises).then(() => {
      // 给DOM时间更新布局
      setTimeout(() => {
        resolve(element.offsetHeight || defaultHeight);
      }, 10);
    });
  });
};
