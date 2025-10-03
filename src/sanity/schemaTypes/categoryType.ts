import { TagIcon } from "@sanity/icons";
import { defineField } from "sanity";
import { defineType } from "sanity";

const categoryType = defineType({
	name: "category",
	title: "Category",
	type: "document",
	icon: TagIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "description",
			type: "text",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
		},
	},
});

export default categoryType;
