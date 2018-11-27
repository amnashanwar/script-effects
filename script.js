/**
 * DAnimation object is used to animate ease with bezier functions
 * example: TweenMax.to($('selector'), 1.5, {left:"80%", ease: DAnimation.bezier(0.04,0.86,0.8,1)});
 *
 * Used: https://github.com/rdallasgray/bez
 */
var DAnimation = ({
        start: 0,
        bezier: function(p0, p1, p2, p3){
            return DAnimation.polyBez([p0, p1], [p2, p3]);

        },
        polyBez: function(p1, p2) {
            var A = [null, null], B = [null, null], C = [null, null],
                bezCoOrd = function(t, ax) {
                    C[ax] = 3 * p1[ax], B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax], A[ax] = 1 - C[ax] - B[ax];
                    return t * (C[ax] + t * (B[ax] + t * A[ax]));
                },
                xDeriv = function(t) {
                    return C[0] + t * (2 * B[0] + 3 * A[0] * t);
                },
                xForT = function(t) {
                    var x = t, i = 0, z;
                    while (++i < 14) {
                        z = bezCoOrd(x, 0) - t;
                        if (Math.abs(z) < 1e-3) break;
                        x -= z / xDeriv(x);
                    }
                    return x;
                };
            return function(t) {
                return bezCoOrd(xForT(t), 1);
            }
        }
    });


//CUSTOM JS CODE
(function ($) {
    'use strict';

    //VIEWPORT
    var w = $( window );
    
    //ANIMATION
    var animationTrigger = $('.trigger');

    var maskTop = $('.mask-top');
    var maskBottom = $('.mask-bottom');
    var maskLeft = $('.mask-left');
    var maskRight = $('.mask-right');

    var emily = $('.emily');

    var lineLong = $('.line-long').find(' span ');
    var lineShort = $('.line-short').find(' span ');

    var type = $('#type');
    var georgia = $('#georgia');
    var festival = $('#festival');
    var year = $('#year');
    var size = $('#size');

    var main = {

        init: function () {
            var self = this;
            //GSAP ANIMATE
            main.animate();
        },

        //GSAP ANIMATION
        animate: function (){
          
            //OPEN
            function openAnimation() {
                TweenMax.to(maskTop, 1.4,
                    {
                        height: "10%", ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(maskBottom, 1.4,
                    {
                        height: "10%", ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(maskLeft, 1.4,
                    {
                        width: "40%", ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(maskRight, 1.2,
                    {
                        //width: "20%", ease: Expo.easeInOut
                        width: "20%", ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(emily, 1.8,
                    {
                        scale: 1.1, top: "-5%", left: "55%", ease:  DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(lineLong, 1,
                    {
                        width: "100%", delay: 0.4, ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(lineShort, 1,
                    {
                        width: "100%", delay: 1, ease: Power3.easeOut
                    }
                );
                TweenMax.fromTo(type, 1.8,
                    {
                        x: -200, opacity: 0
                    },

                    {
                        x: 0, opacity: 1, delay: 0.8, ease: Power3.easeOut
                    }
                );
                TweenMax.fromTo(year, 1.8,
                    {
                        x: -200, opacity: 0
                    },

                    {
                        x: 0, opacity: 1, delay: 0.8, ease: Power3.easeOut
                    }
                );
                TweenMax.fromTo(georgia, 2,
                    {
                        x: -200, opacity: 0
                    },

                    {
                        x: 0, opacity: 1, delay: 1, ease: Power3.easeOut
                    }
                );
                TweenMax.fromTo(festival, 1.8,
                    {
                        x: 200, opacity: 0
                    },

                    {
                        x: 0, opacity: 1, delay: 0.8, ease: Power3.easeOut
                    }
                );
                TweenMax.fromTo(size, 2,
                    {
                        x: 200, opacity: 0
                    },

                    {
                        x: 0, opacity: 1, delay: 1, ease: Power3.easeOut
                    }
                );
            }
            
            //CLOSE
            function closeAnimation() {
                TweenMax.to(maskTop, 1,
                    {
                        height: "7%", ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(maskBottom, 1,
                    {
                        height: "7%", ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(maskLeft, 1,
                    {
                        width: 0, ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(maskRight, 1,
                    {
                        width: 0, ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(emily, 1.8,
                    {
                        scale: 1, top: 0, left: "50%", delay: 0., ease: Expo.easeOut
                    }
                );
                TweenMax.to(lineLong, 0.8,
                    {
                        width: 0, delay: 0.4, ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.to(lineShort, 0.8,
                    {
                        width: 0, delay: 0.4, ease: DAnimation.bezier(0.930, 0.035, 0.350, 0.815)
                    }
                );
                TweenMax.fromTo(type, 1,
                    {
                        x: 0, opacity: 1
                    },

                    {
                        x: -200, opacity: 0, ease: Power3.easeIn
                    }
                );
                TweenMax.fromTo(year, 1,
                    {
                        x: 0, opacity: 1
                    },

                    {
                        x: -200, opacity: 0, ease: Power3.easeIn
                    }
                );
                TweenMax.fromTo(georgia, 0.6,
                    {
                        x: 0, opacity: 1
                    },

                    {
                        x: -200, opacity: 0, ease: Power3.easeIn
                    }
                );
                TweenMax.fromTo(festival, 1,
                    {
                        x: 0, opacity: 1
                    },

                    {
                        x: 200, opacity: 0, ease: Power3.easeIn
                    }
                );
                TweenMax.fromTo(size, 0.6,
                    {
                        x: 0, opacity: 1
                    },

                    {
                        x: 200, opacity: 0, ease: Power3.easeIn
                    }
                );
            }

            animationTrigger.click(function(){
                if($(this).attr('data-toggle') == 'closed') {
                    $(this).attr('data-toggle', 'opened');
                    openAnimation();
                }
                else if($(this).attr('data-toggle', 'opened')) {
                    $(this).attr('data-toggle', 'closed');
                    closeAnimation();
                }
            });
        }
    };

    $(window).resize(function () {
    });
    return main.init();
}($));
