/**
 * Blog Utils Unit Tests
 *
 * Run tests: Open test-runner.html in browser
 * or use Node.js with jsdom for headless testing
 */

(function() {
    'use strict';

    // Simple test framework
    const TestRunner = {
        tests: [],
        passed: 0,
        failed: 0,

        describe(name, fn) {
            console.group(`📦 ${name}`);
            fn();
            console.groupEnd();
        },

        it(name, fn) {
            try {
                fn();
                this.passed++;
                console.log(`  ✅ ${name}`);
            } catch (error) {
                this.failed++;
                console.error(`  ❌ ${name}`);
                console.error(`     ${error.message}`);
            }
        },

        expect(actual) {
            return {
                toBe(expected) {
                    if (actual !== expected) {
                        throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
                    }
                },
                toEqual(expected) {
                    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
                        throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
                    }
                },
                toBeNull() {
                    if (actual !== null) {
                        throw new Error(`Expected null, but got ${JSON.stringify(actual)}`);
                    }
                },
                toBeUndefined() {
                    if (actual !== undefined) {
                        throw new Error(`Expected undefined, but got ${JSON.stringify(actual)}`);
                    }
                },
                toBeTruthy() {
                    if (!actual) {
                        throw new Error(`Expected truthy value, but got ${JSON.stringify(actual)}`);
                    }
                },
                toBeFalsy() {
                    if (actual) {
                        throw new Error(`Expected falsy value, but got ${JSON.stringify(actual)}`);
                    }
                },
                toContain(item) {
                    if (!actual.includes(item)) {
                        throw new Error(`Expected ${JSON.stringify(actual)} to contain ${JSON.stringify(item)}`);
                    }
                },
                toHaveLength(length) {
                    if (actual.length !== length) {
                        throw new Error(`Expected length ${length}, but got ${actual.length}`);
                    }
                },
                toBeGreaterThan(value) {
                    if (actual <= value) {
                        throw new Error(`Expected ${actual} to be greater than ${value}`);
                    }
                }
            };
        },

        summary() {
            console.log('');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log(`📊 Test Results: ${this.passed} passed, ${this.failed} failed`);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            return this.failed === 0;
        }
    };

    const { describe, it, expect } = TestRunner;

    // Mock data for testing
    const mockPosts = [
        {
            id: 1,
            category: 'project',
            title: 'Test Project 1',
            summary: 'This is a test project',
            date: '2025-01-15',
            tags: ['Java', 'Spring Boot'],
            url: 'https://example.com/1'
        },
        {
            id: 2,
            category: 'study',
            title: 'Test Study 1',
            summary: 'This is a test study',
            date: '2025-01-10',
            tags: ['JavaScript', 'React'],
            url: 'https://example.com/2'
        },
        {
            id: 3,
            category: 'project',
            title: 'Test Project 2',
            summary: 'Another test project',
            date: '2025-01-20',
            tags: ['Java', 'AWS'],
            url: 'https://example.com/3'
        }
    ];

    const mockCategories = [
        { id: 'project', name: '프로젝트', icon: 'fa-rocket', color: '#4a6cf7' },
        { id: 'study', name: 'Study', icon: 'fa-book-open', color: '#10b981' }
    ];

    // Run tests
    function runTests() {
        console.log('🧪 Running BlogUtils Tests...\n');

        // escapeHtml tests
        describe('escapeHtml', () => {
            it('should escape HTML special characters', () => {
                expect(BlogUtils.escapeHtml('<script>alert("xss")</script>'))
                    .toBe('&lt;script&gt;alert("xss")&lt;/script&gt;');
            });

            it('should handle empty string', () => {
                expect(BlogUtils.escapeHtml('')).toBe('');
            });

            it('should handle null/undefined', () => {
                expect(BlogUtils.escapeHtml(null)).toBe('');
                expect(BlogUtils.escapeHtml(undefined)).toBe('');
            });

            it('should preserve normal text', () => {
                expect(BlogUtils.escapeHtml('Hello World')).toBe('Hello World');
            });
        });

        // formatDate tests
        describe('formatDate', () => {
            it('should format date to Korean locale', () => {
                const result = BlogUtils.formatDate('2025-01-15');
                expect(result).toContain('2025');
                expect(result).toContain('1');
                expect(result).toContain('15');
            });

            it('should handle various date formats', () => {
                const result = BlogUtils.formatDate('2025-12-25');
                expect(result).toContain('2025');
                expect(result).toContain('12');
                expect(result).toContain('25');
            });
        });

        // truncate tests
        describe('truncate', () => {
            it('should truncate long text', () => {
                const result = BlogUtils.truncate('This is a very long text', 10);
                expect(result).toBe('This is a ...');
            });

            it('should not truncate short text', () => {
                const result = BlogUtils.truncate('Short', 10);
                expect(result).toBe('Short');
            });

            it('should handle empty string', () => {
                expect(BlogUtils.truncate('', 10)).toBe('');
            });

            it('should handle null/undefined', () => {
                expect(BlogUtils.truncate(null, 10)).toBe('');
                expect(BlogUtils.truncate(undefined, 10)).toBe('');
            });
        });

        // findCategory tests
        describe('findCategory', () => {
            it('should find category by id', () => {
                const result = BlogUtils.findCategory(mockCategories, 'project');
                expect(result.name).toBe('프로젝트');
            });

            it('should return undefined for non-existent category', () => {
                const result = BlogUtils.findCategory(mockCategories, 'nonexistent');
                expect(result).toBeUndefined();
            });
        });

        // findPost tests
        describe('findPost', () => {
            it('should find post by id', () => {
                const result = BlogUtils.findPost(mockPosts, 1);
                expect(result.title).toBe('Test Project 1');
            });

            it('should return undefined for non-existent post', () => {
                const result = BlogUtils.findPost(mockPosts, 999);
                expect(result).toBeUndefined();
            });
        });

        // generatePostId tests
        describe('generatePostId', () => {
            it('should generate next id', () => {
                const result = BlogUtils.generatePostId(mockPosts);
                expect(result).toBe(4);
            });

            it('should return 1 for empty array', () => {
                const result = BlogUtils.generatePostId([]);
                expect(result).toBe(1);
            });
        });

        // countByCategory tests
        describe('countByCategory', () => {
            it('should count posts by category', () => {
                const result = BlogUtils.countByCategory(mockPosts);
                expect(result.project).toBe(2);
                expect(result.study).toBe(1);
            });

            it('should handle empty array', () => {
                const result = BlogUtils.countByCategory([]);
                expect(result).toEqual({});
            });
        });

        // countTags tests
        describe('countTags', () => {
            it('should count and sort tags', () => {
                const result = BlogUtils.countTags(mockPosts);
                expect(result[0][0]).toBe('Java');
                expect(result[0][1]).toBe(2);
            });

            it('should limit number of tags', () => {
                const result = BlogUtils.countTags(mockPosts, 2);
                expect(result).toHaveLength(2);
            });

            it('should handle posts without tags', () => {
                const postsWithoutTags = [{ id: 1, category: 'test' }];
                const result = BlogUtils.countTags(postsWithoutTags);
                expect(result).toHaveLength(0);
            });
        });

        // sortPosts tests
        describe('sortPosts', () => {
            it('should sort by date descending', () => {
                const result = BlogUtils.sortPosts(mockPosts, 'date-desc');
                expect(result[0].id).toBe(3);
                expect(result[2].id).toBe(2);
            });

            it('should sort by date ascending', () => {
                const result = BlogUtils.sortPosts(mockPosts, 'date-asc');
                expect(result[0].id).toBe(2);
                expect(result[2].id).toBe(3);
            });

            it('should sort by title ascending', () => {
                const result = BlogUtils.sortPosts(mockPosts, 'title-asc');
                expect(result[0].title).toBe('Test Project 1');
            });

            it('should sort by title descending', () => {
                const result = BlogUtils.sortPosts(mockPosts, 'title-desc');
                expect(result[0].title).toBe('Test Study 1');
            });

            it('should not mutate original array', () => {
                const original = [...mockPosts];
                BlogUtils.sortPosts(mockPosts, 'date-desc');
                expect(mockPosts).toEqual(original);
            });
        });

        // filterPosts tests
        describe('filterPosts', () => {
            it('should filter by category', () => {
                const result = BlogUtils.filterPosts(mockPosts, 'project', '');
                expect(result).toHaveLength(2);
            });

            it('should return all posts when category is all', () => {
                const result = BlogUtils.filterPosts(mockPosts, 'all', '');
                expect(result).toHaveLength(3);
            });

            it('should filter by search query in title', () => {
                const result = BlogUtils.filterPosts(mockPosts, 'all', 'Study');
                expect(result).toHaveLength(1);
                expect(result[0].id).toBe(2);
            });

            it('should filter by search query in tags', () => {
                const result = BlogUtils.filterPosts(mockPosts, 'all', 'AWS');
                expect(result).toHaveLength(1);
                expect(result[0].id).toBe(3);
            });

            it('should be case insensitive', () => {
                const result = BlogUtils.filterPosts(mockPosts, 'all', 'java');
                expect(result).toHaveLength(2);
            });

            it('should combine category and search filters', () => {
                const result = BlogUtils.filterPosts(mockPosts, 'project', 'AWS');
                expect(result).toHaveLength(1);
            });

            it('should not mutate original array', () => {
                const original = [...mockPosts];
                BlogUtils.filterPosts(mockPosts, 'project', 'test');
                expect(mockPosts).toEqual(original);
            });
        });

        // paginate tests
        describe('paginate', () => {
            it('should paginate items correctly', () => {
                const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const result = BlogUtils.paginate(items, 1, 3);
                expect(result.items).toEqual([1, 2, 3]);
                expect(result.totalPages).toBe(4);
            });

            it('should handle second page', () => {
                const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const result = BlogUtils.paginate(items, 2, 3);
                expect(result.items).toEqual([4, 5, 6]);
            });

            it('should handle last page with fewer items', () => {
                const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const result = BlogUtils.paginate(items, 4, 3);
                expect(result.items).toEqual([10]);
            });

            it('should use default perPage', () => {
                const items = Array.from({ length: 20 }, (_, i) => i + 1);
                const result = BlogUtils.paginate(items, 1);
                expect(result.items).toHaveLength(9);
                expect(result.totalPages).toBe(3);
            });
        });

        // CONFIG tests
        describe('CONFIG', () => {
            it('should have required properties', () => {
                expect(BlogUtils.CONFIG.POSTS_PER_PAGE).toBe(9);
                expect(BlogUtils.CONFIG.STORAGE_KEY).toBe('blog_posts_data');
                expect(BlogUtils.CONFIG.DATA_URL).toBe('assets/data/blog-posts.json');
            });
        });

        // DEFAULT_CATEGORIES tests
        describe('DEFAULT_CATEGORIES', () => {
            it('should have 6 default categories', () => {
                expect(BlogUtils.DEFAULT_CATEGORIES).toHaveLength(6);
            });

            it('should have required category properties', () => {
                const category = BlogUtils.DEFAULT_CATEGORIES[0];
                expect(category.id).toBeTruthy();
                expect(category.name).toBeTruthy();
                expect(category.icon).toBeTruthy();
                expect(category.color).toBeTruthy();
            });
        });

        // Print summary
        return TestRunner.summary();
    }

    // Run tests when DOM is ready
    if (typeof BlogUtils !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runTests);
        } else {
            runTests();
        }
    } else {
        console.error('❌ BlogUtils is not defined. Make sure blog-utils.js is loaded first.');
    }

    // Export for Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { TestRunner, runTests };
    }
})();
