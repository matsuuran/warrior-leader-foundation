$(function() {
    $("#collapseChapterButton").click(function() {
        if ($("#collapseChapterIcon").hasClass("fa-caret-right")) {
            $("#chapterLeaderCollapse").hide("slow");
            $("#collapseChapterIcon").removeClass("fa-caret-right");
            $("#collapseChapterIcon").addClass("fa-caret-down");
        } else {
            $("#chapterLeaderCollapse").show("slow");
            $("#collapseChapterIcon").removeClass("fa-caret-down");
            $("#collapseChapterIcon").addClass("fa-caret-right");
        }
    })
});

$(function() {
    $("#collapseWarriorButton").click(function() {
        if ($("#collapseWarriorIcon").hasClass("fa-caret-right")) {
            $("#warriorLeaderCollapse").hide("slow");
            $("#collapseWarriorIcon").removeClass("fa-caret-right");
            $("#collapseWarriorIcon").addClass("fa-caret-down");
        } else {
            $("#warriorLeaderCollapse").show("slow");
            $("#collapseWarriorIcon").removeClass("fa-caret-down");
            $("#collapseWarriorIcon").addClass("fa-caret-right");
        }
    })
});

$(function() {
    $("#collapseCommunityButton").click(function() {
        if ($("#collapseCommunityIcon").hasClass("fa-caret-right")) {
            $("#communityLeaderCollapse").hide("slow");
            $("#collapseCommunityIcon").removeClass("fa-caret-right");
            $("#collapseCommunityIcon").addClass("fa-caret-down");
        } else {
            $("#communityLeaderCollapse").show("slow");
            $("#collapseCommunityIcon").removeClass("fa-caret-down");
            $("#collapseCommunityIcon").addClass("fa-caret-right");
        }
    })
});

$(function() {
    $("#collapseAthleticButton").click(function() {
        if ($("#collapseAthleticIcon").hasClass("fa-caret-right")) {
            $("#athleticLeaderCollapse").hide("slow");
            $("#collapseAthleticIcon").removeClass("fa-caret-right");
            $("#collapseAthleticIcon").addClass("fa-caret-down");
        } else {
            $("#athleticLeaderCollapse").show("slow");
            $("#collapseAthleticIcon").removeClass("fa-caret-down");
            $("#collapseAthleticIcon").addClass("fa-caret-right");
        }
    })
});

$(function() {
    $("#collapseOutdoorsButton").click(function() {
        if ($("#collapseOutdoorsIcon").hasClass("fa-caret-right")) {
            $("#outdoorsLeaderCollapse").hide("slow");
            $("#collapseOutdoorsIcon").removeClass("fa-caret-right");
            $("#collapseOutdoorsIcon").addClass("fa-caret-down");
        } else {
            $("#outdoorsLeaderCollapse").show("slow");
            $("#collapseOutdoorsIcon").removeClass("fa-caret-down");
            $("#collapseOutdoorsIcon").addClass("fa-caret-right");
        }
    })
});

$(function() {
    $("#collapseSocialButton").click(function() {
        if ($("#collapseSocialIcon").hasClass("fa-caret-right")) {
            $("#socialLeaderCollapse").hide("slow");
            $("#collapseSocialIcon").removeClass("fa-caret-right");
            $("#collapseSocialIcon").addClass("fa-caret-down");
        } else {
            $("#socialLeaderCollapse").show("slow");
            $("#collapseSocialIcon").removeClass("fa-caret-down");
            $("#collapseSocialIcon").addClass("fa-caret-right");
        }
    })
});

