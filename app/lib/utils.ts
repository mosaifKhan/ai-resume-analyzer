// Facade utilities for components expecting./lib/utils
// Re-export size formatting helpers and provide a backward-compatible alias.

import { formatSize as baseFormatSize } from "../utils/format";

export const formatSize = baseFormatSize;
// Some code references may use the misspelled name `formateSize`.
// Provide an alias so both imports work consistently.
export const formateSize = baseFormatSize;

export const generateUUID = ( ) => crypto.randomUUID()