"use strict";
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};
const notepad = {
  //   id: "id-1",
  //   title: "test",
  //   body: "test",
  //   prority: Priority.HIGH,
  notes: [],
  getNotes() {
    return this.notes;
  },

  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        return this.notes[i];
      } else {
        return undefined;
      }
    }
  },

  saveNote(note) {
    this.notes.push(note);
    return note;
  },

  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  },

  updateNoteContent(id, updateContent) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes[i] = { ...this.notes[i], ...updateContent };
        console.log(this.notes[i]);
      }
    }
    return this.notes;
  },

  updateNotePriority(id, priority) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes[i].priority = priority;
        return;
      }
    }
    return this.notes;
  },

  filterNotesByQuery(query) {
    let resultQuery = [];
    for (let i = 0; i < this.notes.length; i++) {
      if (
        this.notes[i].title.toLowerCase().includes(query) ||
        this.notes[i].body.toLowerCase().includes(query)
      ) {
        resultQuery.push(this.notes[i]);
      }
    }
    return resultQuery;
  },

  filterNotesByPriority(priority) {
    let resultByPriority = [];
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].priority === priority) {
        resultByPriority.push(this.notes[i]);
      }
    }
    return resultByPriority;
  }
};
// console.log(notepad.prority);

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
console.log(
  notepad.saveNote({
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Priority.HIGH
  })
);
// console.log(saveNote());
// notepad.saveNote({
//   id: "id-2",
//   title: "Refresh HTML and CSS",
//   body:
//     "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
//   priority: Priority.NORMAL
// });

// notepad.saveNote({
//   id: "id-3",
//   title: "Get comfy with Frontend frameworks",
//   body:
//     "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
//   priority: Priority.NORMAL
// });

// notepad.saveNote({
//   id: "id-4",
//   title: "Winter clothes",
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Priority.LOW
// });

// console.log("Все текущие заметки: ", notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
// notepad.updateNotePriority("id-4", Priority.NORMAL);

// console.log(
//   "Заметки после обновления приоритета для id-4: ",
//   notepad.getNotes()
// );

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
// notepad.updateNotePriority("id-3", Priority.LOW);

// console.log(
//   "Заметки после обновления приоритета для id-3: ",
//   notepad.getNotes()
// );

/*
 * Решил отфильтровать заметки по слову html
 */
// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery("html")
// );

/*
 * Решил отфильтровать заметки по слову javascript
 */
// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery("javascript")
// );

// /*
//  * Хочу посмотреть только заметки с нормальным приоритетом
//  */
// console.log(
//   "Отфильтровали заметки по нормальному приоритету: ",
//   notepad.filterNotesByPriority(Priority.NORMAL)
// );

/*
 * Обновим контент заметки с id-3
 */
// notepad.updateNoteContent("id-3", {
//   title: "Get comfy with React.js or Vue.js"
// });

// console.log(
//   "Заметки после обновления контента заметки с id-3: ",
//   notepad.getNotes()
// );

// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */
// notepad.deleteNote("id-2");
// console.log("Заметки после удаления с id -2: ", notepad.getNotes());
