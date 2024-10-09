// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorKakaologin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorKakaologin",
            targets: ["CapacitorKakaologinPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorKakaologinPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorKakaologinPlugin"),
        .testTarget(
            name: "CapacitorKakaologinPluginTests",
            dependencies: ["CapacitorKakaologinPlugin"],
            path: "ios/Tests/CapacitorKakaologinPluginTests")
    ]
)