import { act } from "react-dom/test-utils";

export const initialState = {
  inbox: [],
  users: [],
  preview: [],
  removed: [],
  copyRemoved: [],
  starred: [],
  archive: [],
  spam: [],
  sent: [],
  page: 35,
  themes: [
    { id: 0, name: "dark" },
    { id: 0, name: "light" },
  ],
  nav: [
    {
      id: 0,
      url: "/",
      title: "Inbox",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/inbox_white_20dp.png",
    },
    {
      id: 1,
      url: "starred",
      title: "Starred",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/grade_white_20dp.png",
    },
    {
      id: 3,
      url: "snoozed",
      title: "Snoozed",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/watch_later_white_20dp.png",
    },
    {
      id: 4,
      url: "sent",
      title: "Sent",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/send_white_20dp.png",
    },
    {
      id: 5,
      url: "drafts",
      title: "Drafs",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/insert_drive_file_white_20dp.png",
    },

    {
      id: 6,
      url: "notes",
      title: "Notes",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/label_white_20dp.png",
    },
    {
      id: 7,
      url: "/deleted",
      title: "Deleted",
      icon:
        "https://www.gstatic.com/images/icons/material/system/2x/delete_white_20dp.png",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "load_inbox":
      return {
        ...state,

        inbox: action.payload.map((item) => ({
          ...item,
          isRead: Math.random() > 0.5,
          isChecked: false,
          isStarred: false,
        })),
        page: action.page,
        removed: state.removed,
      };
    case "preview_email":
      state.inbox.filter((item) => item.id === action.payload)[0].isRead = true;

      return {
        ...state,
        preview: action.payload,
      };

    case "remove_email":
      return {
        ...state,
        removed: [...state.removed, ...action.removed],
        inbox: state.inbox.filter((value) => !action.removed.includes(value)),
      };

    case "next_page":
      return {
        ...state,
        page: action.page,
        inbox: action.inbox,
      };

    case "addTo_favorites":
      if (action.isStarred) {
        action.payload.isStarred = true;
      } else {
        action.payload.isStarred = false;
      }
      return {
        ...state,
        starred: [...state.starred, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
