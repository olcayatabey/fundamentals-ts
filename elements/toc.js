(function() {
    Polymer('cxx-toc', {
        // Hierarchy :: [{ elem: Element, sections: Hierarchy }]
        sections: [],

        collectSections: function(root) {
            var sections = [];
            for (var child = root.firstElementChild; child;
                 child = child.nextElementSibling) {
                if (child.tagName.toUpperCase() != 'CXX-SECTION')
                    continue;
                sections.push(this.collectSections(child));
            }
            return {elem: root, sections: sections};
        },

        created: function() {
            var clauses = window.document.querySelectorAll('cxx-clause');
            this.sections = clauses.array().map(this.collectSections, this);
        }
    })
})();
