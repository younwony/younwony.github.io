/**
 * Layout System - 화면 구역 분리 및 UI 요소 배치
 *
 * 구역 정의:
 * - Zone 1 (Top Left): 홈 버튼
 * - Zone 2 (Top Right): 템플릿 전환
 * - Zone 3 (Bottom Left): 다크모드 토글
 * - Zone 4 (Bottom Right): PDF 버튼
 * - Zone 5 (Center): 메인 콘텐츠
 */

(function () {
    'use strict';

    // Layout Configuration
    const LAYOUT_CONFIG = {
        zones: {
            topLeft: { position: 'fixed', top: '20px', left: '20px', zIndex: 10000 },
            topRight: { position: 'fixed', top: '20px', right: '20px', zIndex: 10000 },
            bottomLeft: { position: 'fixed', bottom: '30px', left: '30px', zIndex: 10000 },
            bottomRight: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000 }
        },
        mobile: {
            topLeft: { top: '15px', left: '15px' },
            topRight: { top: '70px', right: '15px' },
            bottomLeft: { bottom: '20px', left: '15px' },
            bottomRight: { bottom: '20px', right: '15px' }
        }
    };

    // Layout Manager
    window.LayoutManager = {
        /**
         * 요소를 특정 구역에 배치
         * @param {HTMLElement} element - 배치할 요소
         * @param {string} zone - 구역 이름 (topLeft, topRight, bottomLeft, bottomRight)
         * @param {object} customStyles - 추가 스타일 (선택사항)
         */
        placeInZone: function (element, zone, customStyles = {}) {
            const zoneConfig = LAYOUT_CONFIG.zones[zone];
            if (!zoneConfig) {
                console.error(`Invalid zone: ${zone}`);
                return;
            }

            // 기본 구역 스타일 적용
            Object.assign(element.style, zoneConfig, customStyles);
        },

        /**
         * 반응형 스타일 생성
         */
        createResponsiveStyles: function () {
            const style = document.createElement('style');
            style.id = 'layout-responsive-styles';
            style.innerHTML = `
                /* Layout System - Fixed Zones */
                .zone-top-left {
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    z-index: 10000;
                }

                .zone-top-right {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10000;
                }

                .zone-bottom-left {
                    position: fixed;
                    bottom: 30px;
                    left: 30px;
                    z-index: 10000;
                }

                .zone-bottom-right {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 10000;
                }

                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .zone-top-left {
                        top: 15px;
                        left: 15px;
                    }

                    .zone-top-right {
                        top: 70px;
                        right: 15px;
                    }

                    .zone-bottom-left {
                        bottom: 20px;
                        left: 15px;
                    }

                    .zone-bottom-right {
                        bottom: 20px;
                        right: 15px;
                    }
                }

                /* Print - Hide all UI zones */
                @media print {
                    .zone-top-left,
                    .zone-top-right,
                    .zone-bottom-left,
                    .zone-bottom-right,
                    .no-print {
                        display: none !important;
                    }
                }
            `;

            // 기존 스타일이 있으면 제거
            const existing = document.getElementById('layout-responsive-styles');
            if (existing) {
                existing.remove();
            }

            document.head.appendChild(style);
        },

        /**
         * 초기화
         */
        init: function () {
            this.createResponsiveStyles();
            console.log('Layout System initialized');
        }
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            window.LayoutManager.init();
        });
    } else {
        window.LayoutManager.init();
    }
})();
