newItems = new ReactiveVar([]);
editPostId = new ReactiveVar('');
editItemId = new ReactiveVar('');

Template.giving.onCreated(function() {
});

Template.giving.helpers({
  newItems() {
    return newItems.get();
  },
  posts() {
    return Post.find({
      userId: Meteor.userId(),
    }, {
      sort: {
        createdAt: -1,
      }
    });
  }
});

Template.giving.events({
  'click #give-btn': function(e) {
    e.stopPropagation();
    const postId = Post.insert({
      userId: Meteor.userId(),
      content: $('#new-post-text').val().trim(),
      status: 'active',
      location: {
        address: 'Ton Dat Tien, Q7, HCMC',
      },
      createdAt: new Date(),
    });

    const items = newItems.get();

    items.forEach(function(t) {
      Item.insert({
        type: [t.category],
        name: t.name,
        desc: t.desc,
        image: t.image,
        oriAmount: t.amount,
        curAmount: t.amount,
        postId,
      });
    });

    $('#new-post-text').val('');
    newItems.set([]);
  },
});

Template.addModal.events({
  'submit #add-item-form': function(e) {
    e.preventDefault();
    const t = e.target;
    var image;

    // var preview = document.querySelector('img');
    var file    = t.image.files[0];

    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      image = reader.result;

      const newItem = {
        name: t.name.value.trim(),
        desc: t.desc.value.trim(),
        type: [t.category.value],
        amount: parseInt(t.amount.value),
      };

      if (image) {
        newItem.image = image;
      }

      const cur = newItems.get();

      cur.push(newItem);

      newItems.set(cur);

      $('#addModal').modal('hide');
      e.target.reset();

    }, false);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      const newItem = {
        name: t.name.value.trim(),
        desc: t.desc.value.trim(),
        type: [t.category.value],
        amount: parseInt(t.amount.value),
      };

      if (image) {
        newItem.image = image;
      }

      const cur = newItems.get();

      cur.push(newItem);

      newItems.set(cur);

      $('#addModal').modal('hide');
      e.target.reset();
    }

  }
});


Template.editStatus.helpers({
  content() {
    const post = Post.findOne({
      _id: editPostId.get(),
    });

    return post && post.content;
  },
});


Template.editStatus.events({
  'click #edit-post-content-btn': function(e, t) {
    Post.update({
      _id: editPostId.get(),
    }, {
      $set: {
        content: t.find('input[name="content"]').value,
      }
    });
  }
});


Template.editModal.helpers({
  item() {
    return Item.findOne({
      _id: editItemId.get(),
    });
  },
  type() {
    const item = Item.findOne({
      _id: editItemId.get(),
    });
    return item && item.type[0];
  },
  selected(type) {
    const item = Item.findOne({
      _id: editItemId.get(),
    });
    const curType = item && item.type[0];


    return curType === type ? 'selected' : '';
  }
});

Template.editModal.events({
  'submit #edit-item-form': function(e) {
    e.preventDefault();
    const t = e.target;
    var image;

    var file    = t.image.files[0];

    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      image = reader.result;

      const newItem = {
        name: t.name.value.trim(),
        desc: t.desc.value.trim(),
        type: [t.category.value],
        amount: parseInt(t.amount.value),
      };

      if (image) {
        newItem.image = image;
      }

      Item.update({
        _id: editItemId.get(),
      }, {
        $set: {
          ...newItem
        }
      });

      $('#editModal').modal('hide');
      // e.target.reset();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      const newItem = {
        name: t.name.value.trim(),
        desc: t.desc.value.trim(),
        type: [t.category.value],
        amount: parseInt(t.amount.value),
      };

      if (image) {
        newItem.image = image;
      }

      Item.update({
        _id: editItemId.get(),
      }, {
        $set: {
          ...newItem
        }
      });


      $('#addModal').modal('hide');
      // e.target.reset();
    }

  }
});
