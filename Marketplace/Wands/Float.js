(function () {
    var _this = this;
    _this.preload = function (entityID) {
        _this.entityID = entityID;
        var newProperties = {
            dynamic: true,
            gravity: {x: 0, y: 1, z: 0},
            lifetime: 1200
        };
        Entities.editEntity(entityID, newProperties);
        var floatSound = SoundCache.getSound("https://hifi-content.s3.amazonaws.com/jedon/Script_Combiner/sci-fi-float.wav");
        if (floatSound.downloaded && !floatSound.playing) {
        Audio.playSound(floatSound, { loop: false, position: MyAvatar.position, volume: .3 });
    }
    }

    _this.unload = function (entityID) {
    }
})