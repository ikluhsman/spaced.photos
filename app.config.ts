export default defineAppConfig({
  ui: {
    modal: {
      slots: {
        overlay: "fixed inset-0 bg-elevated/75",
        content:
          "fixed bg-default divide-y divide-default flex flex-col focus:outline-none",
        header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
        wrapper: "",
        body: "flex-1 overflow-y-auto py-4 sm:py-6",
        footer: "flex items-center gap-1.5 p-4 sm:px-6",
        title: "text-highlighted font-semibold",
        description: "mt-1 text-muted text-sm",
        close: "absolute top-4 end-4 z-10",
      },
    },
  },
  uiPro: {
    pageHeader: {
      slots: {
        root: 'relative border-b border-default py-8 px-2 sm:px-0',
        container: '',
        wrapper: 'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4',
        headline: 'mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5',
        title: 'text-3xl sm:text-4xl text-pretty font-bold text-highlighted',
        description: 'text-lg text-pretty text-muted',
        links: 'flex flex-wrap items-center gap-1.5'
      },
      variants: {
        title: {
          true: {
            description: 'mt-4'
          }
        }
      }
    },
    blogPost: {
      slots: {
        root: "relative group/blog-post flex flex-col rounded-lg overflow-hidden",
        header:
          "relative overflow-hidden aspect-[16/9] w-full pointer-events-none",
        body: "min-w-0 flex-1 flex flex-col",
        footer: "",
        image: "object-cover object-center w-full h-full",
        title: "text-xl text-pretty font-semibold text-highlighted",
        description: "mt-1 text-base text-pretty",
        authors: "pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5",
        avatar: "",
        meta: "flex items-center gap-2 mb-2",
        date: "text-sm",
        badge: "",
      },
      variants: {
        orientation: {
          horizontal: {
            root: "lg:grid lg:grid-cols-2 lg:items-center gap-x-8",
            body: "justify-center p-4 sm:p-6 lg:px-0",
          },
          vertical: {
            root: "flex flex-col",
            body: "p-4 sm:p-6",
          },
        },
        variant: {
          outline: {
            root: "bg-default ring ring-default",
            date: "text-toned",
            description: "text-muted",
          },
          soft: {
            root: "bg-elevated/50",
            date: "text-muted",
            description: "text-toned",
          },
          subtle: {
            root: "bg-elevated/50 ring ring-default",
            date: "text-muted",
            description: "text-toned",
          },
          ghost: {
            date: "text-toned",
            description: "text-muted",
            header: "shadow-lg rounded-lg",
          },
          naked: {
            root: "p-0 sm:p-0",
            date: "text-toned",
            description: "text-muted",
            header: "shadow-lg rounded-lg",
          },
        },
        to: {
          true: {
            root: ["transition"],
            image:
              "transform transition-transform duration-200 group-hover/blog-post:scale-110",
            avatar:
              "transform transition-transform duration-200 hover:scale-115",
          },
        },
        image: {
          true: "",
        },
      },
      compoundVariants: [
        {
          variant: "outline",
          to: true,
          class: {
            root: "hover:bg-elevated/50",
          },
        },
        {
          variant: "soft",
          to: true,
          class: {
            root: "hover:bg-elevated",
          },
        },
        {
          variant: "subtle",
          to: true,
          class: {
            root: "hover:bg-elevated hover:ring-accented",
          },
        },
        {
          variant: "ghost",
          to: true,
          class: {
            root: "hover:bg-elevated/50",
            header: ["group-hover/blog-post:shadow-none", "transition-all"],
          },
        },
        {
          variant: "ghost",
          to: true,
          orientation: "vertical",
          class: {
            header: "group-hover/blog-post:rounded-b-none",
          },
        },
        {
          variant: "ghost",
          to: true,
          orientation: "horizontal",
          class: {
            header: "group-hover/blog-post:rounded-r-none",
          },
        },
        {
          orientation: "vertical",
          image: false,
          variant: "naked",
          class: {
            body: "p-0 sm:p-0",
          },
        },
      ],
      defaultVariants: {
        variant: "outline",
      },
    },
  },
});
