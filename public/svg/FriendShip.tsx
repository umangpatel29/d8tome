import React from 'react'

const FriendShip = ({ color = 'white' }) => {
    return (
        <svg width="24" height="20" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.63974 22.3974C7.75452 22.3974 6.97776 22.1112 6.30944 21.5389C5.64113 20.9666 5.20804 20.2517 5.01017 19.3943C4.7786 19.8164 4.46203 20.1436 4.06045 20.3759C3.6589 20.6082 3.21189 20.7244 2.71943 20.7244C1.95585 20.7244 1.31172 20.4576 0.787044 19.9242C0.262348 19.3907 0 18.7466 0 17.9918C0 17.234 0.253917 16.5947 0.761752 16.0737C1.26959 15.5526 1.91995 15.3046 2.71286 15.3295C2.29661 14.9777 1.96392 14.5384 1.71478 14.0116C1.46563 13.4847 1.34105 12.942 1.34105 12.3836C1.34105 11.7769 1.49017 11.2031 1.7884 10.6623C2.08666 10.1215 2.51278 9.68253 3.06678 9.34545C3.13274 9.46123 3.20419 9.5924 3.28113 9.73895C3.35808 9.88551 3.4288 10.0196 3.49327 10.1413C3.08291 10.4183 2.77184 10.7597 2.56007 11.1657C2.34828 11.5717 2.24239 11.9894 2.24239 12.4188C2.24239 13.6499 2.69342 14.4461 3.5955 14.8074C4.49759 15.1686 5.42862 15.4424 6.38858 15.6285L6.52707 15.9296C6.31311 16.5525 6.14201 17.0783 6.01376 17.507C5.88552 17.9357 5.82139 18.3311 5.82139 18.6931C5.82139 19.4434 6.10096 20.0982 6.66008 20.6573C7.21921 21.2164 7.88129 21.496 8.64634 21.496C9.40552 21.496 10.0453 21.2304 10.5655 20.6991C11.0858 20.1678 11.5142 19.5185 11.8505 18.7513C12.1869 17.9841 12.4576 17.174 12.6628 16.321C12.868 15.468 13.0351 14.7176 13.1641 14.0698C13.1875 13.9247 13.2516 13.8075 13.3564 13.7181C13.4612 13.6287 13.5766 13.5979 13.7027 13.6257C13.8478 13.6726 13.9445 13.7617 13.9929 13.8928C14.0412 14.024 14.0515 14.1717 14.0236 14.3358C13.8668 15.0862 13.6803 15.9322 13.4641 16.8739C13.248 17.8155 12.9402 18.6931 12.5408 19.5065C12.1414 20.3199 11.634 21.005 11.0184 21.562C10.4029 22.1189 9.60996 22.3974 8.63974 22.3974ZM10.2138 14.4018C10.1112 14.5044 9.98408 14.5377 9.83238 14.5018C9.6807 14.4659 9.54403 14.3966 9.42238 14.294C8.00954 13.0292 6.86893 11.8879 6.00056 10.87C5.13219 9.85217 4.698 8.7438 4.698 7.54492C4.698 6.50435 5.05781 5.62792 5.77744 4.91563C6.49705 4.20336 7.36981 3.84723 8.39573 3.84723C8.64048 3.84723 8.87205 3.85931 9.09043 3.88349C9.3088 3.90767 9.50885 3.95347 9.6906 4.0209C9.54842 3.78493 9.4429 3.56362 9.37402 3.35698C9.30513 3.15033 9.27068 2.94001 9.27068 2.72603C9.27068 1.96685 9.53523 1.32272 10.0643 0.793619C10.5934 0.26454 11.2375 0 11.9967 0C12.7559 0 13.4 0.26454 13.9291 0.793619C14.4582 1.32272 14.7227 1.96685 14.7227 2.72603C14.7227 2.93561 14.6894 3.14482 14.6227 3.35366C14.556 3.56252 14.4494 3.78493 14.3028 4.0209C14.4846 3.95347 14.6846 3.90767 14.903 3.88349C15.1214 3.85931 15.3529 3.84723 15.5977 3.84723C16.4346 3.84723 17.1633 4.08136 17.784 4.54962C18.4047 5.01788 18.8308 5.6272 19.0624 6.37758C18.9276 6.37319 18.7737 6.3721 18.6007 6.37429C18.4278 6.37648 18.2739 6.3893 18.1391 6.41276C17.9412 5.8998 17.618 5.49053 17.1696 5.18496C16.7211 4.87937 16.1971 4.72658 15.5977 4.72658C14.8781 4.72658 14.2988 4.91088 13.8599 5.27947C13.4209 5.64807 12.8512 6.23981 12.1506 7.0547H11.8142C11.1093 6.21638 10.5373 5.61878 10.0984 5.2619C9.65944 4.90502 9.09188 4.72658 8.39573 4.72658C7.59257 4.72658 6.92206 4.99552 6.38418 5.5334C5.84631 6.07128 5.57738 6.74179 5.57738 7.54492C5.57738 8.4023 5.9665 9.3161 6.74473 10.2863C7.52296 11.2566 8.63169 12.3851 10.0709 13.6719C10.1926 13.7847 10.2713 13.91 10.3073 14.0478C10.3431 14.1856 10.312 14.3036 10.2138 14.4018ZM15.2811 22.426C15.0085 22.426 14.7407 22.3922 14.4776 22.3248C14.2145 22.2574 13.9584 22.1563 13.7093 22.0215C13.7738 21.9101 13.8492 21.7774 13.9357 21.6235C14.0222 21.4697 14.0911 21.3275 14.1424 21.1971C14.3358 21.304 14.534 21.3843 14.737 21.4378C14.94 21.4913 15.1404 21.518 15.3383 21.518C16.1077 21.518 16.7698 21.2385 17.3245 20.6793C17.8793 20.1202 18.1567 19.4581 18.1567 18.6931C18.1567 18.3267 18.0878 17.9328 17.95 17.5114C17.8122 17.0901 17.6459 16.5702 17.451 15.9517L17.6115 15.6725C18.6051 15.4907 19.5446 15.2156 20.4298 14.847C21.315 14.4784 21.7576 13.6785 21.7576 12.4474C21.7576 11.4918 21.4235 10.7763 20.7552 10.3007C20.0869 9.82508 19.3225 9.58728 18.4622 9.58728C17.7529 9.58728 16.923 9.7038 15.9725 9.93684C15.0221 10.1699 13.9445 10.4769 12.7398 10.8579C12.5947 10.9048 12.4518 10.9063 12.3111 10.8623C12.1704 10.8184 12.0861 10.7334 12.0583 10.6073C12.0304 10.4622 12.0623 10.3325 12.1539 10.2182C12.2455 10.1039 12.3587 10.0211 12.4936 9.96979C13.6587 9.59898 14.7194 9.28864 15.6758 9.03876C16.632 8.78886 17.5169 8.66392 18.3303 8.66392C19.4471 8.66392 20.4441 8.99039 21.3212 9.64333C22.1984 10.2962 22.637 11.2287 22.637 12.4408C22.637 12.9992 22.5197 13.5297 22.2852 14.0324C22.0508 14.5351 21.7181 14.9697 21.2872 15.3361C22.0757 15.3258 22.7249 15.5787 23.235 16.0946C23.745 16.6104 24 17.245 24 17.9984C24 18.7531 23.7377 19.4009 23.213 19.9417C22.6883 20.4826 22.0442 20.753 21.2806 20.753C20.7925 20.753 20.3455 20.6368 19.9395 20.4045C19.5336 20.1722 19.217 19.8377 18.9899 19.4009C18.7729 20.2583 18.3267 20.9768 17.651 21.5565C16.9754 22.1361 16.1854 22.426 15.2811 22.426Z" fill="black" />
            <path d="M8.63974 22.3974C7.75452 22.3974 6.97776 22.1112 6.30944 21.5389C5.64113 20.9666 5.20804 20.2517 5.01017 19.3943C4.7786 19.8164 4.46203 20.1436 4.06045 20.3759C3.6589 20.6082 3.21189 20.7244 2.71943 20.7244C1.95585 20.7244 1.31172 20.4576 0.787044 19.9242C0.262348 19.3907 0 18.7466 0 17.9918C0 17.234 0.253917 16.5947 0.761752 16.0737C1.26959 15.5526 1.91995 15.3046 2.71286 15.3295C2.29661 14.9777 1.96392 14.5384 1.71478 14.0116C1.46563 13.4847 1.34105 12.942 1.34105 12.3836C1.34105 11.7769 1.49017 11.2031 1.7884 10.6623C2.08666 10.1215 2.51278 9.68253 3.06678 9.34545C3.13274 9.46123 3.20419 9.5924 3.28113 9.73895C3.35808 9.88551 3.4288 10.0196 3.49327 10.1413C3.08291 10.4183 2.77184 10.7597 2.56007 11.1657C2.34828 11.5717 2.24239 11.9894 2.24239 12.4188C2.24239 13.6499 2.69342 14.4461 3.5955 14.8074C4.49759 15.1686 5.42862 15.4424 6.38858 15.6285L6.52707 15.9296C6.31311 16.5525 6.14201 17.0783 6.01376 17.507C5.88552 17.9357 5.82139 18.3311 5.82139 18.6931C5.82139 19.4434 6.10096 20.0982 6.66008 20.6573C7.21921 21.2164 7.88129 21.496 8.64634 21.496C9.40552 21.496 10.0453 21.2304 10.5655 20.6991C11.0858 20.1678 11.5142 19.5185 11.8505 18.7513C12.1869 17.9841 12.4576 17.174 12.6628 16.321C12.868 15.468 13.0351 14.7176 13.1641 14.0698C13.1875 13.9247 13.2516 13.8075 13.3564 13.7181C13.4612 13.6287 13.5766 13.5979 13.7027 13.6257C13.8478 13.6726 13.9445 13.7617 13.9929 13.8928C14.0412 14.024 14.0515 14.1717 14.0236 14.3358C13.8668 15.0862 13.6803 15.9322 13.4641 16.8739C13.248 17.8155 12.9402 18.6931 12.5408 19.5065C12.1414 20.3199 11.634 21.005 11.0184 21.562C10.4029 22.1189 9.60996 22.3974 8.63974 22.3974ZM10.2138 14.4018C10.1112 14.5044 9.98408 14.5377 9.83238 14.5018C9.6807 14.4659 9.54403 14.3966 9.42238 14.294C8.00954 13.0292 6.86893 11.8879 6.00056 10.87C5.13219 9.85217 4.698 8.7438 4.698 7.54492C4.698 6.50435 5.05781 5.62792 5.77744 4.91563C6.49705 4.20336 7.36981 3.84723 8.39573 3.84723C8.64048 3.84723 8.87205 3.85931 9.09043 3.88349C9.3088 3.90767 9.50885 3.95347 9.6906 4.0209C9.54842 3.78493 9.4429 3.56362 9.37402 3.35698C9.30513 3.15033 9.27068 2.94001 9.27068 2.72603C9.27068 1.96685 9.53523 1.32272 10.0643 0.793619C10.5934 0.26454 11.2375 0 11.9967 0C12.7559 0 13.4 0.26454 13.9291 0.793619C14.4582 1.32272 14.7227 1.96685 14.7227 2.72603C14.7227 2.93561 14.6894 3.14482 14.6227 3.35366C14.556 3.56252 14.4494 3.78493 14.3028 4.0209C14.4846 3.95347 14.6846 3.90767 14.903 3.88349C15.1214 3.85931 15.3529 3.84723 15.5977 3.84723C16.4346 3.84723 17.1633 4.08136 17.784 4.54962C18.4047 5.01788 18.8308 5.6272 19.0624 6.37758C18.9276 6.37319 18.7737 6.3721 18.6007 6.37429C18.4278 6.37648 18.2739 6.3893 18.1391 6.41276C17.9412 5.8998 17.618 5.49053 17.1696 5.18496C16.7211 4.87937 16.1971 4.72658 15.5977 4.72658C14.8781 4.72658 14.2988 4.91088 13.8599 5.27947C13.4209 5.64807 12.8512 6.23981 12.1506 7.0547H11.8142C11.1093 6.21638 10.5373 5.61878 10.0984 5.2619C9.65944 4.90502 9.09188 4.72658 8.39573 4.72658C7.59257 4.72658 6.92206 4.99552 6.38418 5.5334C5.84631 6.07128 5.57738 6.74179 5.57738 7.54492C5.57738 8.4023 5.9665 9.3161 6.74473 10.2863C7.52296 11.2566 8.63169 12.3851 10.0709 13.6719C10.1926 13.7847 10.2713 13.91 10.3073 14.0478C10.3431 14.1856 10.312 14.3036 10.2138 14.4018ZM15.2811 22.426C15.0085 22.426 14.7407 22.3922 14.4776 22.3248C14.2145 22.2574 13.9584 22.1563 13.7093 22.0215C13.7738 21.9101 13.8492 21.7774 13.9357 21.6235C14.0222 21.4697 14.0911 21.3275 14.1424 21.1971C14.3358 21.304 14.534 21.3843 14.737 21.4378C14.94 21.4913 15.1404 21.518 15.3383 21.518C16.1077 21.518 16.7698 21.2385 17.3245 20.6793C17.8793 20.1202 18.1567 19.4581 18.1567 18.6931C18.1567 18.3267 18.0878 17.9328 17.95 17.5114C17.8122 17.0901 17.6459 16.5702 17.451 15.9517L17.6115 15.6725C18.6051 15.4907 19.5446 15.2156 20.4298 14.847C21.315 14.4784 21.7576 13.6785 21.7576 12.4474C21.7576 11.4918 21.4235 10.7763 20.7552 10.3007C20.0869 9.82508 19.3225 9.58728 18.4622 9.58728C17.7529 9.58728 16.923 9.7038 15.9725 9.93684C15.0221 10.1699 13.9445 10.4769 12.7398 10.8579C12.5947 10.9048 12.4518 10.9063 12.3111 10.8623C12.1704 10.8184 12.0861 10.7334 12.0583 10.6073C12.0304 10.4622 12.0623 10.3325 12.1539 10.2182C12.2455 10.1039 12.3587 10.0211 12.4936 9.96979C13.6587 9.59898 14.7194 9.28864 15.6758 9.03876C16.632 8.78886 17.5169 8.66392 18.3303 8.66392C19.4471 8.66392 20.4441 8.99039 21.3212 9.64333C22.1984 10.2962 22.637 11.2287 22.637 12.4408C22.637 12.9992 22.5197 13.5297 22.2852 14.0324C22.0508 14.5351 21.7181 14.9697 21.2872 15.3361C22.0757 15.3258 22.7249 15.5787 23.235 16.0946C23.745 16.6104 24 17.245 24 17.9984C24 18.7531 23.7377 19.4009 23.213 19.9417C22.6883 20.4826 22.0442 20.753 21.2806 20.753C20.7925 20.753 20.3455 20.6368 19.9395 20.4045C19.5336 20.1722 19.217 19.8377 18.9899 19.4009C18.7729 20.2583 18.3267 20.9768 17.651 21.5565C16.9754 22.1361 16.1854 22.426 15.2811 22.426Z" fill={color} />
        </svg>

    )
}

export default FriendShip