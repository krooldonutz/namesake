import { v } from "convex/values";
import {
  CATEGORIES,
  CORE_QUESTS,
  JURISDICTIONS,
  ROLES,
  STATUS,
  THEMES,
  TIME_UNITS,
} from "./constants";

export const jurisdiction = v.union(
  ...Object.keys(JURISDICTIONS).map((jurisdiction) => v.literal(jurisdiction)),
);

export const status = v.union(
  ...Object.keys(STATUS).map((status) => v.literal(status)),
);

export const theme = v.union(
  ...Object.keys(THEMES).map((theme) => v.literal(theme)),
);

export const role = v.union(
  ...Object.keys(ROLES).map((role) => v.literal(role)),
);

export const category = v.union(
  ...Object.keys(CATEGORIES).map((category) => v.literal(category)),
);

export const timeRequiredUnit = v.union(
  ...Object.keys(TIME_UNITS).map((unit) => v.literal(unit)),
);

export const coreQuest = v.union(
  ...Object.keys(CORE_QUESTS).map((quest) => v.literal(quest)),
);
